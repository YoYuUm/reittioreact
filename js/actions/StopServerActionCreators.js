var AppDispatcher = require('../dispatcher/AppDispatcher');
module.exports = {
  requestStopSuccess: function(stop) {
    AppDispatcher.handleServerAction({
      type: "REQUEST_STOP_SUCCESS",
      stop: stop
    });
  },
  requestStopError: function(stopId, message) {
    console.log(message);
    AppDispatcher.handleServerAction({
      type: "REQUEST_STOP_ERROR",
      stop: stop
    });
  }
};

