'use strict';

/**
* Exports Module
*/
module.exports = (Request) => {

    const fn = {};

    fn.user = function(args, res) {

        Request.get('/user/' + args.user, function(response) {

            res.end(JSON.stringify(response));
        });
    };

    return fn;
};
