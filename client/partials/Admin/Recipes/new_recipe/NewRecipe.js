

Template.NewRecipe.events({
	'keyup .ingredient-name':function(e){
		var currentTarget = $(e.currentTarget);
		/*
		var results = Ingredients.find({name: {$regex: currentTarget.val(), $options: "i" }}, {limit: 5}).fetch();
		if (results && results.length > 0){
			Session.set('autocomplete', results);
		} else {
			Session.set('autocomplete', []);
		}
		*/
		/*
		var results = Meteor.users.find({username: {$regex: currentTarget.val(), $options: "i" }}, {limit: 5}).fetch();
		if (results && results.length > 0){
			Session.set('autocomplete', results);
			if ($('.autocomplete-item')){
				$('.ingredient-name').append('<div class="autocomplete-item">');
				d = document.createElement('div');
				$(d).addClass('autocomplete-item');
				_.each(results, function(entry){
					var p = document.createElement('span');
					$(p).text(entry.username);
					d.append(p);
				});
				var parent = $('.ingredient-name').parent();
				$(d).appendTo(parent);
			}
		} else {
			Session.set('autocomplete', []);
		}
		console.log(results);
		*/

	}
});




Template.NewRecipe.helpers({
	Recipes:function(){
		return Recipes.find({})
	},
	autocomplete:function(){
		var autocomplete = Session.get('autocomplete');
		if (autocomplete && autocomplete.length > 0){
			$('')
		}
	},
	newSchema:function(){
		var settings = {
			position: 'bottom',
			limit: 5,
			rules: [
				{
					collection: Meteor.users,
					field: 'username',
					template: Template.UserPill
				}
			]
		};

		newIngredient = new SimpleSchema({
			name: {
				type: String,
				label: 'Name',
				
				autoform: {
					afFieldInput: {
						type: 'autocomplete-input',
						settings: settings
					}
				}
				
			},
			amount: {
				type: String,
				label: 'Amount'
			},
			measurement: {
				type: String,
				label: 'Measurement'
			}
		});

		derp = new SimpleSchema({
			name: {
				type: String,
				label: 'Name'
			},
			category: {
				type: String,
				label: 'Category',
				allowedValues: [
					'main-course',
					'breakfast',
					'side',
					'soup-salad',
					'snack',
					'appetizer',
					'dessert',
					'sauce-dressing'
				],
				autoform: {
					options: [
						{
							label: 'Main Course',
							value: 'main-course'
						},
						{
							label: 'Breakfast',
							value: 'breakfast'
						},
						{
							label: 'Side',
							value: 'side'
						},
						{
							label: 'Soup/Salad',
							value: 'soup-salad'
						},
						{
							label: 'Snack',
							value: 'snack'
						},
						{
							label: 'Appetizer',
							value: 'appetizer'
						},
						{
							label: 'Dessert',
							value: 'dessert'
						},
						{
							label: 'Sauce/Dressing',
							value: 'sauce-dressing'
						}
					]
				}
			},
			difficulty: {
				type: String,
				label: 'Difficulty',
				allowedValues: [
					'beginner',
					'intermediate',
					'advanced'
				],
				autoform: {
					options: {
						beginner: 'Beginner',
						intermediate: 'Intermediate',
						advanced: 'Advanced'
					}
				}
			},
			yield: {
				type: String,
				label: 'Yield'
			},
			//img: {
			//	type: String,
			//	label: 'Image',
			//	autoform: {
			//		afFieldInput: {
			//			type: 'file'
			//		}
			//	}
			//},
			
			ingredients: {
				type: [newIngredient]
			},
			paleo: {
				type: Boolean,
				label: 'Paleo'
			},
			primal: {
				type: Boolean,
				label: 'Primal'
			},
			Keto: {
				type: Boolean,
				label: 'Keto'
			},
			Vegan: {
				type: Boolean,
				label: 'Vegan'
			},
			Vegetarian: {
				type: Boolean,
				label: 'Vegetarian'
			},
			Crockpot: {
				type: Boolean,
				label: 'Crockpot'
			},
			whole30: {
				type: Boolean,
				label: 'Whole 30'
			},
			wahls: {
				type: Boolean,
				label: "Wahl's Protocol"
			},
			under6: {
				type: Boolean,
				label: 'Under 6 Ingredients'
			},
			under400: {
				type: Boolean,
				label: 'Under 400 Calories'
			},
			glutenFree: {
				type: Boolean,
				label: 'Gluten-Free'
			},
			dairyFree: {
				type: Boolean,
				label: 'Dairy-Free'
			},
			instructions: {
				type: String,
				label: 'Instructions',
				autoform: {
					afFieldInput: {
						type: 'textarea'
					}
				}
			},
		});


		return derp
	}
});



Template.NewRecipe.onCreated(function(){
	this.autorun(()=> {
		this.subscribe('allRecipes');
	})



	NewSchema = new SimpleSchema({

	})


});

