var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');
var Actions = require('../actions');

module.exports = React.createClass({
	mixins: [
		// Reflux.listenTo(script, functionToRun)
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
				<li>
					{topic}
				</li>
			);
		});
	},
	onChange: function(event, topics){
		this.setState({topics: topics});
	}
});