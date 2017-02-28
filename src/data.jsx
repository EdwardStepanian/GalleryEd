import React from 'react';
import Image from 'react-bootstrap/lib/Image.js';
import Modal from 'react-bootstrap/lib/Modal.js';


import windowClose from './gallery';


class Content extends Modal {
    constructor() {
        super();
        this.state = {
            open : true,
            imgId : '',
            imgSrc : '',
            comment : ''
        };
    }


    hideModal() {
        this.setState({
            open: false
        });

    }
    getComment(){

    }
    render() {
        return (
            <Modal show = {this.props.show} onHide = {this.props.onHide} id="infoModal"  dialogClassName="custom-modal"  >
                <Modal.Header  id="infoHead" closeButton>
                </Modal.Header>
                <Modal.Body id="infoBody">
                    <Image src = { this.props.photo } className="infoImages"/>
                    <div>
                        <h2>{this.props.comment}</h2>
                    </div>
                </Modal.Body>
            </Modal>
        );

    }
}




export default Content;

