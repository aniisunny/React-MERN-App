import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import './FilesComponent.css'
import axios from 'axios';

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
        axios.post("http://localhost:6001/api/user-profile", formData)
        .then(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <div className="files">
                <Form>
                    <Form.Group controlId="File">
                        <Form.Label>Upload a File</Form.Label>
                        <Form.Control type="file" />
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