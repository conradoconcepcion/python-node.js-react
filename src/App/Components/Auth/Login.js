import React, {Component} from 'react';



class Login extends Component {


    /**
    * Set State
    */
    constructor(props) {

        super(props);

        this.state = {
            email: '',
            password: '',
            invalid: false
        };

        document.title = 'Login';
        document.body.id = 'authentication';


        if(typeof localStorage._seb !== 'undefined') {

            window.location.href = '/#/dashboard';
        }
    }




    /**
    * Submit
    */
    submit(e) {

        e.preventDefault();

        if(this.state.email || this.state.password) {
            // Send data
            fetch(this.props.app.endpoint('login'), {
                method: 'POST',
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
            })

            // Convert to JSON
            .then(response => response.json())

            // Set to state
            .then(response => {

                if(response.hasOwnProperty('ID')) {

                    // Redirect to dashboard if already loggedin
                    if(response.ID !== '') {

                        this.setState({invalid: false});

                        localStorage.setItem('_seb', window.btoa(response.ID.toString()).replace('==', ''));

                        if(typeof localStorage._seb !== 'undefined') {
                            // Get user
                            this.props.app.user(window.atob(localStorage._seb));

                            window.location.href = '/#/dashboard';
                        }
                    }

                } else {

                    this.setState({invalid: response.message});
                }
            })

            // Catch error
            .catch(error => console.error('Error:', error));

        } else {

            this.setState({invalid: 'Please fill empty fields.'});
        }
    }



    /**
    * Render
    */
	render() {

		return (
            <div id="login" className="box clear">

                <div className="column-1">
                    <figure className="logo-1"></figure>
                    <h1>Join the<br/>revolution</h1>
                    <h3>World's First<br/>Encryp Currency</h3>
                    <p></p>
                </div>

                <div className="column-2">

                    <figure className="logo-2"></figure>

                    <form action="" onSubmit={this.submit.bind(this)}>

                        {(this.state.invalid) ? (<p className="error">{this.state.invalid}</p>) : ''}

                        <div className="field">
                            <i className="icon-email-slim"></i>
                            <input type="email" className="input" onChange={(e) => this.setState({email: e.target.value})} placeholder="Email" required/>
                        </div>

                        <div className="field">
                            <i className="icon-lock-slim"></i>
                            <input type="password" className="input" onChange={(e) => this.setState({password: e.target.value})} placeholder="Password" required/>
                        </div>

                        <a href="/#/reset" className="forgot">Forgot your password?</a>
                        <button type="submit" className="button-1">Sign In</button>
                        <a href="/#/signup" className="link">Don't have account? Create Account Here</a>
                    </form>
                </div>

           </div>
		);
	}
}


export default Login;
