import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Auth } from "aws-amplify";

import Routes from "./Routes";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    } catch (e) {
      if (e !== "No current user") alert(e);
    }
    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

  handleLogout = async () => {
    await Auth.signOut();
    this.userHasAuthenticated(false);
    this.props.history.push("/login");
  };

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      !this.state.isAuthenticating && (
        <Container className="App">
          <Navbar collapseOnSelect expand="lg" bg="light">
            <Navbar.Brand className="navbar-brand" href="#home">
              Scratch
            </Navbar.Brand>
            <Nav className="mr-auto">
              {this.state.isAuthenticated ? (
                <LinkContainer to="/logout">
                  <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
                </LinkContainer>
              ) : (
                <Fragment>
                  <LinkContainer to="/signup">
                    <Nav.Link>Signup</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                </Fragment>
              )}
            </Nav>
          </Navbar>
          <Routes childProps={childProps} />
        </Container>
      )
    );
  }
}

export default withRouter(App);
