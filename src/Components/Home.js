import React, { Component } from 'react'
import './Home.css'

class Home extends Component {

    uploadFile () {
        
    }

    modifyFile () {
        
    }

    render () {
        return (
            <div className = "uploadfile">
                <header className = "header">
                    <ul>
                        <li>
                            <b>MERN Application</b>
                        </li>
                        <li class = "liClass">
                            <a href = "#x">
                                <button class = "button statisticsButton" onClick = {() => this.statistics()}>Statistics</button>
                            </a>
                        </li>
                        <li class = "liClass">
                            <a href = "#x">
                                <button class = "button modifyButton" onClick = {() => this.modifyFile()}>Modify Files</button>
                            </a>
                        </li>
                        <li class = "liClass">
                            <a href = "#x">
                                <button class = "button uploadButton" onClick = {() => this.uploadFile()}>Upload Files</button>
                            </a>
                        </li>
                    </ul>
                </header>
            </div>
        )
    }
}

export default Home