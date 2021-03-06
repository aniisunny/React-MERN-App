let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    uuidv4 = require('uuid/v4'),
    router = express.Router();

const DIR = './public/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        //const fileName = file.originalname.toLowerCase().split(' ').join('-');
        //cb(null, uuidv4() + "-" + fileName)
        cb(null, file.originalname)
    }
});

var upload = multer({
    storage: storage, 
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "image/png" || file.mimetype === "image/jpeg" || file.mimetype === "application/pdf" || file.mimetype === "video/mp4") {
            cb(null, true);
        }
        else {
            cb(null, false);
            return cb(new Error('Only .png, .jpeg, .pdf and .mp4 format allowed!'));
        }
    }
});

let User = require('../models/user');

router.post('/user-profile', upload.single('profileImg'), (req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        //profileImg: url + '/public/' + req.file.filename
        profileImg: req.file.filename
    });
    user.save().then(result => {
        res.status(201).json({
            message: "User registered sucessfully!", 
            userCreated: {
                _id: result._id,
                profileImg: result.profileImg
            }
        })
    }).catch(err => {
        console.log(err)
            res.status(500).json({
                error: err
            });
    })
})

router.get("/", (req, res, next) => {
    User.find().then(data => {
        res.status(200).json({
            message: "User list retrieved successfully!",
            users: data
        });
    });
});

var fs = require('fs')

router.route('/delete-image/:id').delete((req, res, next) => {
    User.findByIdAndRemove(req.params.id, (error, data) => {
        if(error) {
            return next(error);
        }
        else {
            // fs.unlink(DIR+req.file.filename, err => {
            //     if(err) {
            //         return next(err);
            //     }
            //     else {
            //         res.status(200).json({
            //             msg: data
            //         })
            //     }
            // })
            res.status(200).json({
                msg: data
            })
        }
    })
}) 

const path = require('path');

router.route('/download/:file(*)').get((req, res, next) => {
    User.find(req, (error, data) => {
        if(error) {
            return next(error);
        }
        else {
            var file = req.params.file;
            var fileLocation = path.join(DIR, file);
            res.download(fileLocation, file);
            res.status(200).json({ 
                msg: "Successfully Downloaded!"
            })
        }
    })
})

module.exports = router;
