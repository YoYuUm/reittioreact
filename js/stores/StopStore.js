var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require("react/lib/Object.assign");

var CHANGE_EVENT = 'change';

var _stops = {};

// var createStop = function(id) {
//   _stops[id] = {              // Id could be different than code!
//     isPending: true
//   };
// };

var updateStop = function(stop) {
  _stops[stop.code] = stop;
};

var errorStop = function(stopId) {
  _stops[stopId] = {
    isError: true
  };
};

var StopStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  getAll: function() {
    return _stops;
  },
});


StopStore.dispatchToken= AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {
    // case "REQUEST_STOP":
    //   createStop(action.stopId);
    //   StopStore.emitChange();
    //   break;

    case "REQUEST_STOP_SUCCESS":
      console.log(action)
      updateStop(action.stop);
      StopStore.emitChange();
      break;

    case "REQUEST_STOP_ERROR":
      console.log(action);
      errorStop(action.stopId);
      StopStore.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = StopStore;
