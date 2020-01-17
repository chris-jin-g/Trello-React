import React, { Component } from 'react';
import { MDBContainer, MDBModal, MDBModalBody } from 'mdbreact';


// Import css for it
import './Modal.css';

class BoardModal extends Component {
  render() {
    return (
      <div>
        <MDBModal className="board-modal" isOpen={this.props.modalstate} toggle={this.props.toggle} fullHeight position="left">
          <MDBModalBody className="board-modal-body">
            <input className="search" type="text" placeholder="Find boards by name…" />
          </MDBModalBody>
        </MDBModal>
      </div>
    );
}
}

export default BoardModal;