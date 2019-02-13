const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');



const fn = module.exports = {};


const settings = {
	service: 'gmail',
	auth: {
		user: '',
		pass: ''
	}
};


// Mailer
fn.mail = nodemailer.createTransport(settings);



// Send
fn.send = function(options) {

	options.from = settings.auth.user;

	// Send
	this.mail.sendMail(options, (error, response) => {

		if(error) {

			return error;
		}

		return response;
	});
};



// HTML
fn.html = function(name, data) {

    var html = fs.readFileSync(path.join(__dirname, '/Template/'+name+'.html'), 'utf8');

    if(pattern = html.match(/(\{[a-z]+\})/g)) {

        return html.replace(new RegExp(pattern.join('|'), 'g'), (m) => {

            if(value = data[m.match(/([a-z]+)/g)]) {

                return value;
            }

            return m;
        });
    }
};
