var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
	// if any actions get called, and you have method of same name, invoke it
	listenables: [
		Actions
	],
	getTopics: function(){
		return Api.get('topics/defaults')
				.then(function(json){
					this.topics = json.data;
					this.triggerChange();
				}.bind(this) );
	},
	triggerChange: function(){
		// Reflux.trigger(event, emitObj)
		this.trigger('change', this.topics);
	}
});