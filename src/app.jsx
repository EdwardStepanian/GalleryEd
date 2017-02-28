import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import Gallery from './gallery';
const appPath = document.getElementsByClassName('app')[0];
class App extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="mainContainer">
                <Login/>
                <Gallery/>
            </div>

        )
    }
}

ReactDOM.render(<App />, appPath);