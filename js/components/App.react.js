var _ = require('lodash');

var LinkedStateMixin = require('react/lib/LinkedStateMixin')
var Stop = require('./Stop.react');
var StopStore = require('../stores/StopStore');
var StopActionCreators = require('../actions/StopActionCreators');
var React = require('react');
var StopAPIUtils = require('../utils/StopAPIUtils');

var getStateFromStores = function() {
  return {
    stops: StopStore.getAll(),
    addStop: ''
  };
};

var App = React.createClass({
  mixins: [LinkedStateMixin],

  componentDidMount: function() {
    StopStore.addChangeListener(this._onChange);
  },

  getInitialState: function() {
    return {
      stops: StopStore.getAll(),
      addStop: '2222268'
    };
  },

  handleRefresh: function() {
    keys = _.keys(this.state.stops);
    _.each(keys, function(stopId){
      StopActionCreators.requestStop(stopId)
    });
  },

  handleAddLink: function() {
    console.log(StopActionCreators);
    StopActionCreators.requestStop(this.state.addStop);
  },

  handleKeyUp: function(e) {
    if (e.keyCode === 13) {
      this.handleAddLink();
    }
  },

  render: function() {
    var stops = _.map(this.state.stops, function(stop){
      return <Stop stop={stop} />;
    });
    return (
      <div className="reittio-stop-app">
        <input onKeyUp={this.handleKeyUp} valueLink={this.linkState('addStop')}/>
        <button onClick={this.handleAddLink}>Add</button>
        <a href="#" onClick={this.handleRefresh}>Refresh</a>
        {stops}
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the MessageStore
   */
  _onChange: function() {
    this.setState(getStateFromStores());
  }

});

module.exports = App;
