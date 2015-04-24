var React = require('react');
var Departure = require('./Departure.react');

function getDeparture(departure) {
  return (
    <Departure
      departure={departure}
    />
  );
}
var Stop = React.createClass({
  render: function() {
    var departures = this.props.stop.departures;
    var departuresListItems = departures.map(function(departure) {
      return getDeparture(departure);
    });

    return (
      <div className="stop-section">
        <h2 className="stop-name">{this.props.stop.name_fi} - {this.props.stop.city_fi} - {this.props.stop.code_short}</h2>
        <ul className="departures-section">
          {departuresListItems}
        </ul>
      </div>
    );
  },
});

module.exports = Stop;
