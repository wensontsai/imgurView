var React = require('react');
var Reflux = require('reflux');

var Actions = require('../actions');
var ImageStore = require('../stores/image-store');

module.exports = React.createClass({
	listenables: [Actions],
	mixins: [
		Reflux.listenTo(ImageStore, 'onChange')
	],
	getInitialState: function(){
		return{
			images: []
		}
	},
	componentWillMount: function(){
		Actions.getImages(this.props.params.id);
	},
	render: function(){
		return(
			<div>
				I am a topic with ID: {this.props.params.id}
			</div>
		);	
	},
	onChange: function(event, images){
		this.setState( {images: images} )
	}
});