var HomeView = Backbone.View.extend({
	el: '#main',

	render: function() {
		var template = _.template($('#template_home').html());
		this.$el.html(template);
	}
});