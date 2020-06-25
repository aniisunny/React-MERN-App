import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TableRow from './TableRow';

class ListsComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userData: []
        };
    }

    componentDidMount () {
        axios.get ('http://localhost:4000/api')
        .then(res => {
            this.setState({
                userData: res.data.users
            });
        })
        .catch(error => {
            console.log(error);
        })
    }

    DataTable () {
        return this.state.userData.map((res, i) => {
            return <TableRow obj={res} key={i} />;
        });
    }

    render () {
        return (
            <div class="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>File Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default ListsComponent