var React = require('react');
var utils = require('../utils/utils')
var Departure = React.createClass({

  render: function() {
    var departure = this.props.departure;
    interpreted_jore = utils.interpret_jore(departure.code)

    return (<li className='Departure'>{interpreted_jore[0]} - {interpreted_jore[2]} - {departure.time}</li>);
  },
});

module.exports = Departure;
