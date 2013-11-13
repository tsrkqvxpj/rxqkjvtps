var Router = Backbone.Router.extend({
	routes: {
		"" 		: 	"home"
	}
});
var router = new Router;

var homeView = new HomeView();
router.on('route:home', function() {
	homeView.render();
});


Backbone.history.start();