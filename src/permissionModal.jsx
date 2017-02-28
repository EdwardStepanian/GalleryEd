import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

class PermissionModal extends  React.Component{
    render(){

        return (
            <Modal {...this.props} bsSize="large" id="mainModal" aria-labelledby="contained-modal-title-lg"  >
                <Modal.Header closeButton id="mainHeader">
                    Hi! Please sign in with facebook to join this awesome app

                </Modal.Header>
                <Modal.Body id="loginBody">
                    this App will use photos
                    <Button >
                        Login
                    </Button>
                </Modal.Body>
            </Modal>
        );
    }

}

export default PermissionModal;