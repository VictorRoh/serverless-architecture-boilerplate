'use strict';

const dynamo = require('../../lib/dynamo');

module.exports.update = (event, context, callback) => {

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            service: "bananinha"
        }),
    };

    callback(null, response);

};