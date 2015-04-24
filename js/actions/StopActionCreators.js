var AppDispatcher = require('../dispatcher/AppDispatcher');
var StopAPIUtils = require('../utils/StopAPIUtils');
module.exports = {

  requestStop: function(stopId) {
    AppDispatcher.handleViewAction({
      type: "REQUEST_STOP",
      stopId: stopId
    });
    StopAPIUtils.getStop(stopId);
  }
};

