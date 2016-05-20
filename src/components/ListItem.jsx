var React = require('react');

var ListItem = React.createClass({
    render: function() {
        return (
            <li>
                <h6>{this.props.text}</h6>
            </li>
        );
    }
});

module.exports = ListItem;
