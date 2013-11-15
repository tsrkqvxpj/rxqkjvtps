var Plugin = Backbone.Model.extend({
    label: function () {
        return this.get("name");
    }
});

var PluginCollection = Backbone.Collection.extend({
    model: Plugin
});

var c1 = new Plugin({name : "San Francisco"});
var c2 = new Plugin({name : "Barcelona"});
var c3 = new Plugin({name : "Seoul"});
var c4 = new Plugin({name : "Beijing"});
var c5 = new Plugin({name : "New Delhi"});
var c6 = new Plugin({name : "Varanasi"});
var c7 = new Plugin({name : "Rio de Janeiro"});
var col = new PluginCollection([c1, c2, c3, c4, c5, c6, c7]);




var HomeView = Backbone.View.extend({
	el: '#main',

	render: function() {
		var template = _.template($('#template_home').html());
		

		this.$el.html(template);

		new AutoCompleteView({
		    input: this.$("#input_search"),
		    model: col
		}).render();

	}
});

