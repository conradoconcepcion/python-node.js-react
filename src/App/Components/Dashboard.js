import React, {Component} from 'react';


// Components
import Charts from './Dashboard/Charts';
import Account from './Dashboard/Account';
import Welcome from './Dashboard/Welcome';
import Transactions from './Dashboard/Transactions';

// Purchase
import Purchase from './Payments/Purchase';

// Layour
import Header from './Common/Header';



/**
* Dashboard
*/
export default class Dashboard extends Component {


    /**
    * Set State
    */
    constructor(props) {

        super(props);

        this.state = {
            popup: false
        };

        document.body.id = 'dashboard';

        this.props.app.ifNoSession();
    }



    /**
    * Render
    */
    render() {

        this.props.app.restriction(this.props.user.subscription);

        return (
            <div id="dashboard">
                <Header app={this.props.app} user={this.props.user} title="Dashboard"/>
                <div id="content">
                    <Welcome user={this.props.user}/>
                    <section id="account-charts" className="box clear">
                        <Account user={this.props.user} app={this.props.app} txns={this.props.txns} parent={this}/>
                        <Charts user={this.props.user} parent={this}/>
                    </section>
                    <Transactions user={this.props.user} app={this.props.app} txns={this.props.txns}/>
                </div>
                {(this.state.popup) ? (<Purchase app={this.props.app} user={this.props.user} parent={this}/>) : ''}
            </div>
        );
    }
}
