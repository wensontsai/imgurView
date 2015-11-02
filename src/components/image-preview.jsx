var React = require('react');

module.exports = React.createClass({
	getInitialState: function(){
		return {
			hovering: false
		}
	},	
	render: function(){
		return(
			<div 
				className="image-preview"
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
				>
				{ this.props.animated && this.state.hovering ? this.video() : this.image() }
			</div>
		)
	},
	image: function(){
		var link = 'http://i.imgur.com/' + this.props.id + 'h.jpg';

		return(
			<img src={link} />
		)
	},
	handleMouseEnter: function(){
		this.setState({hovering: true});
	},
	handleMouseLeave: function(){
		this.setState({hovering: false});
	},
	video: function(){
		return (
			<div>
				<video preload='auto' autoPlay='autoPlay' loop='loop' webkit-playsinline >
					<source src={this.props.mp4} />
				</video>
			</div>
		)
	}
});