import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class TableRow extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.obj.profileImg}</td>
                <td>
                    <Button size="sm" variant="danger">Edit</Button>
                    <Button size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}

export default TableRow