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
	},
	ingredientFromRecipe:function(data){
		
		var conflict = Ingredients.findOne({$and: [{name: data.name}, {ndbno: data.ndbno}, {aisle: data.aisle}]});
		if (!conflict){
			Ingredients.insert(data);
		}
	},
	parseUpload:function(data){
		check(data, Array);

		for (let i = 0; i < data.length; i++) {
			let item = data[i],
				exists = USDA.findOne({ndb_no: item.ndb_no});

			if (!exists){
				USDA.insert(item);
			} else {
				console.warn('Rejected. This item already exists.');
			}

		}
	}
})