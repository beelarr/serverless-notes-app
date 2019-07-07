import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { API } from "aws-amplify";

import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      notes: []
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }
    try {
      const notes = await this.notes();
      this.setState({ notes });
    } catch (e) {
      console.error(e);
      alert(e);
    }
    this.setState({ isLoading: false });
  }

  notes = () => API.get("notes", "/notes");

  renderNotesList = notes =>
    [{}].concat(notes).map((note, i) =>
      i !== 0 ? (
        <LinkContainer key={note.noteId} to={`/notes/${note.noteId}`}>
          <ListGroup.Item action={true}>
            <h4>{note.content.trim().split("\n")[0]}</h4>
            <small>{`Created: ${Date(note.createdAt)}`}</small>
          </ListGroup.Item>
        </LinkContainer>
      ) : (
        <LinkContainer key="new" to="/notes/new">
          <ListGroup.Item action={true}>
            <h4>
              <b>{"\uFF0B"}</b> Create a new note
            </h4>
          </ListGroup.Item>
        </LinkContainer>
      )
    );

  renderLander = () => (
    <div className="lander">
      <h1>Scratch</h1>
      <p>A simple note taking app</p>
    </div>
  );

  renderNotes = () => (
    <div className="notes">
      <h1>Your Notes</h1>
      <hr />
      <ListGroup>
        {!this.state.isLoading && this.renderNotesList(this.state.notes)}
      </ListGroup>
    </div>
  );

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderNotes() : this.renderLander()}
      </div>
    );
  }
}
