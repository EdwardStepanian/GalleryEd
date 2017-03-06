import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import GalleryEd  from './gallery';
let edPhotos = [];
function cloneObj(objName){
    return JSON.parse(JSON.stringify(objName));
}
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lgShow : false,
            permOpen : false,
            imgArray : [],
            imgUrl : []
        };
        this.login = this.login.bind(this);
    }
    login(){
        var self = this;
        FB.login(function(){
            FB.api(
                '/me',
                'GET',
                {"fields":"photos"},
                function(response) {
                    if (!response || response.error) {
                        alert('Error occured');
                        console.log(response.error)
                    } else {
                        response.photos.data.map(img => {
                            FB.api(
                                img.id+'/picture',
                                'GET',
                                {"type":"normal"},
                                response => {
                                    edPhotos.push(response);
                                    self.setState({
                                        imgUrl : edPhotos
                                    })
                                }
                            );
                        });
                        self.setState({
                            imgArray : response,
                            lgShow: true,
                        });
                    }
                }
            );
        }, {scope: 'user_photos'});
    }

    render(){
        let lgClose = () => this.setState({ lgShow: false });
        return(
            <div className="login">
                <div className="header"><h1>Facebook Photo Viewer <br/> GallerYort</h1></div>
                <div className="loginText"><h2>Plase sign in with your facebook account and make sure to grant <br/> "view photos" permission.Enjoy!</h2></div>
                <div id="fb-root">
                <Button bsStyle="success"  data-max-rows="1" data-size="large" data-show-faces="false" data-auto-logout-link="false" className="signInBtn" onClick = {this.login}>
                    Sign in with facebook</Button>
                </div>
                <GalleryEd show = {this.state.lgShow} onHide = {lgClose} pictures = {this.state.imgUrl} />
            </div>
        )
    }
}

export default Login;
