var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');
var Actions = require('../actions');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
	mixins: [
		// Reflux listens for 'change' : 	Reflux.listenTo(script, functionToRun)
		Reflux.listenTo(TopicStore, 'onChange')
	],
	getInitialState: function(){
		return {
			topics: []
		}
	},
	componentWillMount: function(){
		// TopicStore.getTopics()
		// 	.then(function(){
		// 		// successfully fetched topics
		// 		// topics available on TopicStore.topics
		// 		this.setState({
		// 			topics: TopicStore.topics
		// 		});
		// 	}.bind(this) );
		
		// call an ACTION, then Action will call getTopics
		Actions.getTopics();
	},
	render: function(){
		return(
			<div className="list-group">
				Topic List
				{ this.renderTopics() }
			</div>
		);
	},
	renderTopics: function(){
		return this.state.topics.map(function(topic){
			return (
				<Link to={'topics/' + topic.id} className="list-group-item" key={topic.id}>
					<h4>{topic.name}</h4>
					<p>{topic.description}</p>
				</Link>
			);
		});
	},
	onChange: function(event, topics){
		this.setState({topics: topics});
	}
});