var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Reflux = require('reflux');

var Actions = require('../actions');
var TopicStore = require('../stores/topic-store');

// Link turns into <a> tag when rendered //
// routing for single page, prevents complete page reload

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(TopicStore, 'onChange')
	],
	getInitialState: function(){
		return {
			topics: []
		}
	},
	componentWillMount: function(){
		Actions.getTopics();
	},
	render: function(){
		return(
			<nav className="navbar navbar-default header">
				<Link to="/" className="navbar-brand">
					Imgur Browser
				</Link>
				<ul className="nav navbar-nav navbar-right">
					{ this.renderTopics() }
				</ul>
			</nav>
		);
	},
	onChange: function(event, topics){
		this.setState({
			topics: topics
		});
	},
	renderTopics: function(){
		return this.state.topics.map(function(topic){
			return(
				<li key={topic.id}>
					<Link to={"topics/" + topic.id} activeClassName="active">
						{topic.name}
					</Link>
				</li>
			)
		});
	}
});