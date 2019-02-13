'use strict';

/**
* Import Module
*/
const Mailer  = require('../Mail/Mailer');



/**
* Exports Module
*/
module.exports = (Request) => {

    const fn = {};

    // Public Key
    const PubKey = Request.abi.createPK();

    // Headers
    const Headers = {'Content-Type': 'application/json; charset=UTF-8'};



    // Login
    fn.login = function(data, res) {

        const abi = Request.abi;


        // For handshake
        Request.post('/', {
            body: {
                handshake: PubKey
            },
            headers: Headers

        }, (r) => {

            // Create Shared Key
            const csk = abi.createSK(abi.set(r.handshake));

            // Login with publicKey
            Request.post('/user/login', {
                body: {
                    publickey: PubKey
                },
                headers: Headers
    
            }, (r) => {
    
                if(r.hasOwnProperty('ID') && r.ID !== '') {
    
                    data.date = new Date();
    
                    Mailer.send({
                        to: data.email,
                        subject: 'Conrado Concepcion Login Notice',
                        html: Mailer.html('LoginNotice', data)
                    });
                }
    
                res.end(JSON.stringify(r));
            });
        });
    };




    fn.signup = function(data, res) {

        Request.post('/register/signup', {
            body: {
                publickey: Key
            },
            headers: Headers

        }, (r) => {

    		if(r.hasOwnProperty('status')) {

    			if(r.status === 201) {

    				data.link = ''

    				Mailer.send({
    					to: data.email,
    					subject: 'Conrado Concepcion Email Verification',
    					html: Mailer.html('Verification', data)
    				});
    			}
    		}

    		res.end(JSON.stringify(r));
        });
    };


    return fn;
};
