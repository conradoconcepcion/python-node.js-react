import React, {Component} from 'react';

import {
  Route,
  // NavLink,
  HashRouter
} from 'react-router-dom';


import Wallet    from './Components/Wallet';
import Trading   from './Components/Trading';
import Login     from './Components/Auth/Login';
import Signup    from './Components/Auth/Signup';
import Dashboard from './Components/Dashboard';
import Registration from './Components/Registration';


/**
* App
*/
class App extends Component {



    /**
    * Constructor
    */
    constructor(props) {

        super(props);

        this.state = {
            user: {},
            txns: [],
            status: 0,
        };

        // localStorage.setItem('_seb', window.btoa('4631301661394377507').replace('==', ''));
        // localStorage.setItem('_seb', window.btoa('2583333094802389138').replace('==', ''));
    }


    /**
    * Redirect if not logged In
    */
    ifNoSession() {

        if(typeof localStorage._seb === 'undefined') {

            window.location.href = '/#/login';
        }
    }


    /**
    * Timestamp
    */
    logout(e) {

        e.preventDefault();

        localStorage.removeItem('_seb');

        if(typeof localStorage._seb === 'undefined') {

            window.location.href = '/#/login';
        }
    }


    /**
    * Timestamp
    */
    timestamp(int) {

        return new Date(parseInt(int));
    }


    /**
    * Endpoint
    */
    endpoint(name) {

        return ''+ name;
    }


    /**
    * Date and Time
    */
    dateandtime(time) {

        return this.timestamp(time).toLocaleString().split(',').reverse().join(',');
    }



    /**
    * Mount
    */
    user(id) {

        // Send data
        fetch(this.endpoint('user'), {
            method: 'POST',
            body: JSON.stringify({user: id}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        })

        // Convert to JSON
        .then(response => response.json())

        // Set to state
        .then(response => {

            if(response.hasOwnProperty('results')) {

                this.setState({user: response.results});
            }
        })

        // Catch error
        .catch(error => console.error('Error:', error));


        // Get transactions of a user
        if(id || ['wallet','dashboard'].includes(window.location.hash.replace('#/', ''))) {

            this.transactions(id);
        }
    }



    /**
    * Transactions
    */
    transactions(id) {

        // Send data
        fetch(this.endpoint('transactions'), {
            method: 'POST',
            body: JSON.stringify({user: id}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        })

        // Convert to JSON
        .then(response => response.json())

        // Set to state
        .then(response => {

            if(response.hasOwnProperty('TransactionRecords')) {

                this.setState({txns: response.TransactionRecords.reverse()});
            }
        })

        // Catch error
        .catch(error => console.error('Error:', error));
    }



    /**
    * Did Mount
    */
    componentDidMount() {

        if(typeof localStorage._seb !== 'undefined') {
            // Get user
            this.user(window.atob(localStorage._seb));
        }
    }



    /**
    * Restriction
    */
    restriction(subscription) {

        if(subscription === false) {

            window.location.href = '/#/registration';
        }
    }



    /**
    * Render
    */
    render() {

		return (
			<HashRouter>
				<div className="inner">

                    <Route exact path='/logout' render={props => this.logout.bind(this)}/>

                    {/* Pages */}
                    <Route exact path='/' render={props => window.location.href = '/#/dashboard'}/>
                    <Route exact path='/login' render={props => (<Login app={this} user={this.state.user}/>)}/>
                    <Route exact path='/signup' render={props => (<Signup app={this} user={this.state.user}/>)}/>
                    <Route exact path='/wallet' render={props => (<Wallet app={this} user={this.state.user}/>)}/>
                    <Route exact path='/trading' render={props => (<Trading app={this} user={this.state.user}/>)}/>
                    <Route exact path='/registration' render={props => (<Registration app={this} user={this.state.user}/>)}/>
                    <Route exact path='/dashboard' render={props => (<Dashboard app={this} txns={this.state.txns} user={this.state.user}/>)}/>
				</div>
		    </HashRouter>
        );
	}
}


export default App;
