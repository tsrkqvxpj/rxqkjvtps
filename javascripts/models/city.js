var City = Backbone.Model.extend({
	defaults : {
		id	 : 1,
		name : null,
		mapCoordinates : {
			latitude : 0,
			longtitude : 0	
		}
	},

	label: function () {
        return this.get("name");
    }

});