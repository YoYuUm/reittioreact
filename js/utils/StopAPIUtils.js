var StopServerActionCreators = require('../actions/StopServerActionCreators');
var request = require('then-request');
var config = require('../config');

module.exports = {

  getStop: function(code) {
    request(
        'GET',
        (
            'http://api.reittiopas.fi/hsl/prod/?request=stop&user=' +
            config.APIUser + '&pass=' + config.APIpass +'&format=json&code=' + code
        )
    ).done(function (response) {
        if (response.statusCode >= 300){
            requestStopError(code, 'error message');
        }
        else {
            var rawStop = JSON.parse(response.body);
            StopServerActionCreators.requestStopSuccess(rawStop[0]);
        }
    });
  }
};

