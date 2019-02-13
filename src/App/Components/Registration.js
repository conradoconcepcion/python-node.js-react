import React, {Component} from 'react';



// Components
import Header from './Common/Header';
import ActivationFee from './Payments/ActivationFee.js';



/**
* Registration
*/
export default class Registration extends Component {


    /**
    * Set State
    */
    constructor(props) {

        super(props);

        this.state = {
            popup: false
        };

        document.body.id = 'registration';

        this.props.app.ifNoSession();
    }


    /**
    * Render
    */
    render() {

        return (
            <div id="payment-registration">
                <Header app={this.props.app} user={this.props.user} title="Registration"/>
                <div id="content">
                    <section id="info" className="box">
                        <h1>Welcome to Conrado Concepcion</h1>
                        <p>A one-time activation fee of $100 is needed to activate your account and access the dashboard. This fee is non-refundable and will not be credited to your wallet.</p>
                        <button className="round-button-2" onClick={(e) => this.setState({popup: true})}><i className="icon-credit-card"></i> Make a Payment</button>
                    </section>
                </div>

                {(this.state.popup) ? (<ActivationFee app={this.props.app} user={this.props.user} parent={this}/>) : ''}
            </div>
        );
    }
}
