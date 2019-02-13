import React, {Component} from 'react';



class Welcome extends Component {


    /**
    * Render
    */
	render() {

		return (
            <section id="welcome" className="clear">
                <h1>Welcome, <span>{this.props.user.email}</span></h1>
                <p>Live Trading Tools is here to provide you with all the necessary tools you might need for all of your transactions plus it has the function of giving you the latest update on the trade market by showing a real time movement of the market. Live Trading Tools primarily gives you the option to buy dimes using our platforms 'wallet'. It lets you acquire the amount of dimes you want by converting your deposited dollars.</p>
                <a href="#/trading" className="button">Get Started</a>
            </section>
		);
	}
}


export default Welcome;