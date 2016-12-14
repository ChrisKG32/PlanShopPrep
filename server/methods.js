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
	ingredientFromRecipe:function(name, type, aisle){
		var conflict = Ingredients.findOne({$and: [{name: name}, {type: type}, {aisle: aisle}]});
		if (!conflict){
			Ingredients.insert({name: name, type: type, aisle: aisle});
		}
	},
	parseUpload:function(data){
		check(data, Array);

		for (let i = 0; i < data.length; i++) {
			let item = data[i],
				exists = USDA.findOne({NDB_No: item.NDB_No});

			if (!exists){
				USDA.insert(item);
			} else {
				console.warn('Rejeced. This item already exists.');
			}

		}
	}
})