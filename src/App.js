import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FilesUploadComponent from './Components/FilesUploadComponent';
import ListsComponent from './Components/ListsComponent';

function App() {
  return ( 
  <Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to={"/upload-files"} className="nav-link">
                React MERN App
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/upload-files"} className="nav-link">
                  Upload Files
                </Link>
              </Nav>

              <Nav>
                <Link to={"/modify-files"} className="nav-link">
                  Modify Files
                </Link>
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div>
              <Switch>
                <Route exact path='/' component={FilesUploadComponent} />
                <Route path="/upload-files" component={FilesUploadComponent} />
                <Route path="/modify-files" component={ListsComponent} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>
  );
}

export default App;
