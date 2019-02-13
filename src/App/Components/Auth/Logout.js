import {Component} from 'react';



class Logout extends Component {


    /**
    * Set State
    */
    constructor(props) {

        super(props);

        localStorage.removeItem('_seb');

        if(typeof localStorage._seb == 'undefined') {

            window.location = '/#/login';
        }
    }
}


export default Logout;