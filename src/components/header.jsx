var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

// Link turns into <a> tag when rendered //
// routing for single page, prevents complete page reload

module.exports = React.createClass({
	render: function(){
		return(
			<nav className="navbar navbar-default header">
				<Link to="/" className="navbar-brand">
					Imgur Browser
				</Link>
				<ul className="nav navbar-nav navbar-right">
					<li><a href="">Topic 1</a>
					</li>
				</ul>
			</nav>
		);
	}	
});