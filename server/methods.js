Meteor.methods({
	deleteEntry:function(entry, type){
		if (type === 'ingredient'){
			Ingredients.remove(entry._id);
		} else if (type === 'recipe'){
			Recipes.remove(entry._id);
		}
	},
	storeUrlInDatabase: function( url ) {
		check( url, String );
		Modules.both.checkUrlValidity( url );
	}
})