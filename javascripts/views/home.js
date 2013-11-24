var HomeView = Backbone.View.extend({
	el: '#main',

	render: function() {
		var template = _.template($('#template_home').html());
		

		this.$el.html(template);

		new AutoCompleteView({
		    input: this.$("#input_search"),
		    model: cities
		}).render();

	}
});

