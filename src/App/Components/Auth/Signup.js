import React, {Component} from 'react';


class Signup extends Component {


    /**
    * Set State
    */
    constructor(props) {

        super(props);

        this.state = {
            next: 0,
            step: 1,
            city: '',
            state: '',
            terms: '',
            email: '',
            invalid: '',
            country: '',
            success: '',
            password: '',
            lastname: '',
            firstname: '',
            middlename: '',
            streetaddress: '',
            confirmpassword: ''
        };


        document.title = 'Signup';
        document.body.id = 'authentication';


        if(typeof localStorage._seb !== 'undefined') {

            window.location.href = '/#/dashboard';
        }
    }



    /**
    * Submit Product
    */
    submit(e) {

        e.preventDefault();

        const data = {
            email: this.state.email,
            password: this.state.password,
            lastname: this.state.lastname,
            firstname: this.state.firstname,
            middlename: this.state.middlename,
            confirmpassword: this.state.confirmpassword
        };


        if(this.state.step > 3) {

            if(this.state.city && this.state.state && this.state.country && this.state.streetaddress) {

                data.city = this.state.city;
                data.state = this.state.state;
                data.country = this.state.country;
                data.streetaddress = this.state.streetaddress;


                if(this.state.terms) {

                    // Send data
                    fetch(this.props.app.endpoint('signup'), {
                        body: JSON.stringify(data),
                        method: "POST",
                        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
                    })

                    // Convert to JSON
                    .then(response => response.json())

                    // Set to state
                    .then(response => {

                        if(response.status === 201) {

                            this.setState({success: 'Thanks! You have successfully signed up.', invalid: false, step: 3});
                            // this.setState({success: 'Thanks! We\'ve sent you an email for verification. Please check your inbox or in spam incase its not in your inbox.', invalid: false, step: 3});

                        } else {

                            this.setState({invalid: response.message, success: false});
                        }
                    })

                    // Catch error
                    .catch(error => console.error('Error:', error));


                    this.setState({step: this.state.step - 1});

                } else {

                    this.setState({invalid: 'Please check the box to agree our terms and conditions', success: false, step: this.state.step - 1});
                }


            } else {

                this.setState({invalid: 'Please fill empty fields.', success: false, step: this.state.step - 1});
            }
        }
    }



    /**
    * Step 1
    */
    one() {

        return (
            <fieldset>
                <p>Sign-in Information</p>

                <div className="field">
                    <input type="email" onChange={(e) => this.setState({email: e.target.value})} placeholder="Email Address" value={this.state.email} required/>
                </div>

                <div className="field">
                    <input type="password" onChange={(e) => this.setState({password: e.target.value})} placeholder="Password" value={this.state.password} required/>
                </div>

                <div className="field">
                    <input type="password" onChange={(e) => this.setState({confirmpassword: e.target.value})} placeholder="Confirm Password" value={this.state.confirmpassword} required/>
                </div>
            </fieldset>
        );
    }



    /**
    * Step 2
    */
    two() {

      if(this.state.email && this.state.password && this.state.confirmpassword) {

            if(this.state.password === this.state.confirmpassword) {

                // this.setState({invalid: false});

                return (
                    <fieldset>
                        <p>Basic Information</p>

                        <div className="field">
                            <input type="text" onChange={(e) => this.setState({firstname: e.target.value})} placeholder="First Name" value={this.state.firstname} required/>
                        </div>

                        <div className="field">
                            <input type="text" onChange={(e) => this.setState({middlename: e.target.value})} placeholder="Middle Name" value={this.state.middlename} required/>
                        </div>

                        <div className="field">
                            <input type="text" onChange={(e) => this.setState({lastname: e.target.value})} placeholder="Last Name" value={this.state.lastname} required/>
                        </div>
                    </fieldset>
                );

            } else {

                this.setState({invalid: 'Password doesn\'t match.', success: false, step: this.state.step - 1});
            }

        } else {

            this.setState({invalid: 'Please fill empty fields.', success: false, step: this.state.step - 1});
        }

    }



    /**
    * Step 3
    */
    three() {


      if(this.state.firstname && this.state.middlename && this.state.lastname) {

            return (
                <fieldset>
                    <p>Contact Information</p>

                    <div className="field">
                        <input type="text" onChange={(e) => this.setState({streetaddress: e.target.value})} placeholder="Street Address" value={this.state.streetaddress} required/>
                    </div>

                    <div className="field">
                        <input type="text" onChange={(e) => this.setState({city: e.target.value})} placeholder="City" value={this.state.city} required/>
                    </div>

                    <div className="field">
                        <input type="text" onChange={(e) => this.setState({state: e.target.value})} placeholder="State/Province" value={this.state.state} required/>
                    </div>

                    <div className="field">
                        <input type="text" onChange={(e) => this.setState({country: e.target.value})} placeholder="Country" value={this.state.country} required/>
                    </div>

                    <div className="field">
                        <label htmlFor="agree">
                            <input type="checkbox" id="agree" onChange={(e) => this.setState({terms: true})}/>
                            <small>By clicking here, you confirm that you agree with our terms and conditions.</small>
                        </label>
                    </div>
                </fieldset>
            );

        } else {

            this.setState({invalid: 'Please fill empty fields.', success: false, step: this.state.step - 1});
        }

    }



    /**
    * Render
    */
	render() {

		return (
            <div id="signup" className="box clear">

                <div className="column-1">
                    <figure className="logo-1"></figure>
                    <h1>Join the<br/>revolution</h1>
                    <h3>World's First<br/>Encryp Currency</h3>
                    <p></p>
                </div>

                <div className="column-2">

                    <header>
                        <h1>Create Account</h1>
                        <p>It's free and always will be.</p>
                    </header>

                    <form onSubmit={this.submit.bind(this)}>

                        {(this.state.invalid) ? (<p className="error">{this.state.invalid}</p>) : ''}
                        {(this.state.success) ? (<p className="success">{this.state.success}</p>) : ''}

                        {(this.state.step === 1) ? this.one() : ''}
                        {(this.state.step === 2) ? this.two() : ''}
                        {(this.state.step === 3) ? this.three() : ''}


                        <div className="progress">
                            <span className={(this.state.step === 1) ? 'active' : ''} onClick={(e) => this.setState({step: 1})}></span>
                            <span className={(this.state.step === 2) ? 'active' : ''} onClick={(e) => this.setState({step: 2})}></span>
                            <span className={(this.state.step === 3) ? 'active' : ''} onClick={(e) => this.setState({step: 3})}></span>
                        </div>

                        <button type="submit" className="button-1" onClick={(e) => this.setState({step: this.state.step + 1})}>{(this.state.step < 3) ? 'Submit' : 'Create My Account'}</button>
                        <a href="/#/login" className="link">Already have account? SIGN IN</a>

                    </form>
                </div>

           </div>
		);
	}
}


export default Signup;
