var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Hello = React.createClass({
  render: function() {
    return <h1 className="red">
      Hello!
    </h1>
  }
});

var Child1 = React.createClass({
	render: function(){
		return(
			return <h1>I'm Child1.</h1>
		);
	}
});

var Child2 = React.createClass({
	render: function(){
		return(
			return <h1>I'm the other child, Child2.</h1>
		);
	}
});

var element = React.createElement(Hello, {});
React.render(element, document.querySelector('.container'));
