import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import './FilesComponent.css'
import axios from 'axios';
import ListsComponent from './ListsComponent';

class FilesUploadComponent extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            profileImg: ''
        }
    }

    onFileChange(e) {
        this.setState({profileImg: e.target.files[0]})
    }

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('profileImg', this.state.profileImg)
        axios.post('http://localhost:4000/api/user-profile', formData, {})
        .then(res => {
            console.log(res)
        })
    }

    render() {
        return (
            // <div  className="container">
            //     <div className="row">
            //         <form onSubmit={this.onSubmit}>
            //             <div className="form-group">
            //                 <input type="file" onChange={this.onFileChange} />
            //             </div>
            //             <div className="form-group">
            //                 <button className="btn btn-primary" type="submit">
            //                     Upload 
            //                 </button>
            //             </div>
            //         </form>
            //     </div>
            // </div>
            <div className="files">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="File">
                        <Form.Label className="upload">Upload a File</Form.Label>
                        <Form.Control className = "inputfile" type="file" onChange={this.onFileChange} />
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" type="submit">
                        Upload
                    </Button>
                </Form>
            </div>
        )
    }
}

export default FilesUploadComponent;