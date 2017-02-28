import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Content from './data';
var comments = [
    'Nice',
    'Good Photo',
    "I'm shocked",
    'Beautiful image',
    'My heart is yours',
    'Unbelievable',
    'You are so beautiful',
    'One time Joe Cocker sang about you',
    'Hey ~~'
];

var infoImage,photoComment;
class GalleryEd extends Modal {
    constructor(props){
        super(props);
        this.state = {
            elements: [],
            imgArray:[],
            open: false,

        };

        this.buildElements = this.buildElements.bind(this);
    }
    windowOpen(){
        var mainContainer = document.getElementById('mainTabs-pane-1');
        var rootElem = mainContainer.childNodes[0];
        var el = rootElem.childNodes[0];
        this.setState({
            open : true,
            imgId : el.id,
            imgUrl : el.src
        })
    };
    componentWillReceiveProps(props){
        this.setState({
            imgArray : props.pictures,
        });
    }
    windowClose() {
        this.setState({
            open: false
        });
    };

    buildElements(){
        let self = this;
        let comment = comments[Math.floor(Math.random()*comments.length)];

        if(self.state.imgArray){
            return (
                self.state.imgArray.map(function (image) {
                    return (
                        <img className="mainImages"  src={image.data.url} key={Math.random()}
                             onClick={
                                 () => {
                                     self.setState({
                                         open: true,
                                     });
                                     infoImage = image.data.url;
                                     photoComment = comment;
                                 }
                             }
                        >
                        </img>
                    );
                })
            );
        }
    }
    render() {
        let close = () => this.setState({open: false });
        return (
            <Modal show = {this.props.show} onHide = {this.props.onHide} bsSize="large" id="mainModal" aria-labelledby="contained-modal-title-lg"  >
                <Modal.Header closeButton id="mainHeader">
                    Hi! Please sign in with facebook to join this awesome app
                </Modal.Header>
                <Modal.Body id="loginBody">
                    <div className="container">
                        <div className="row">
                            {this.buildElements()}
                        </div>
                        <Content show = {this.state.open} onHide = {close} photo = {infoImage} comment = {photoComment}/>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}

export default GalleryEd;