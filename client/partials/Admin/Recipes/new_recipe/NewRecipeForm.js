Template.NewRecipeForm.events({
	'change input[type="file"]':function ( event, template ) {
		Modules.client.uploadToAmazonS3( { event: event, template: template } );

	},
	'autocompleteselect input':function(event, tmpl, doc){
		var currentTarget = $(event.currentTarget);
		currentTarget.val(doc.value);
	},
	'keyup input[name="ingredient.0.dbSearch"]':function(){
		var currentTarget = $(e.currentTarget);
		Session.set('dbSearch', currentTarget.val());
	}
});

Template.NewRecipeForm.helpers({
	fileUploaded:function(){
		var reactVar = Session.get('fileUploaded');
		if (reactVar){
			return reactVar
		} else {
			return false
		}
	},
	Recipes:function(){
		return Recipes.find({})
	},
	newSchema:function(){
		var settings = {
			position: 'bottom',
			limit: 5,
			rules: [
				{
					collection: Ingredients,
					field: 'name',
					template: Template.UserPill
				}
			]
		};
		var settings2 = {
			position: 'bottom',
			limit: 2,
			rules: [
				{
					collection: Measurements,
					field: 'name',
					template: Template.MeasurementPill
				}
			]
		};

		IngredientsSchema = new SimpleSchema({
			
			createdAt: {
				type: Date,
				label: 'Created At',
				autoValue:function(){
					return new Date()
				},
				autoform: {
					type: 'hidden'
				}
			},
			createdBy: {
				type: String,
				label: 'Created By',
				autoValue: function(){
					return this.userId
				},
				autoform: {
					type: 'hidden'
				}
			},
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
			/*
			type: {
				type: String,
				label: 'Type',
				allowedValues: [
					'volume',
					'weight'
				],
				autoform: {
					options: [
						{
							label: 'Volume',
							value: 'volume'
						},
						{
							label: 'Weight',
							value: 'weight'
						}
					]
				}
			},*/
			amount: {
				type: Number,
				label: 'Amount',
				decimal: true,
				min: 0
			},
			measurement: {
				type: String,
				label: 'Measuring Unit',
				autoform: {
					afFieldInput: {
						type: 'autocomplete-input',
						settings: settings2
					}
				}
			},
			aisle: {
				type: String,
				label: 'Aisle'
			}

		});


		derp = new SimpleSchema({
			
			name: {
				type: String,
				label: 'Name'
			},
			createdAt: {
				type: Date,
				label: 'Date',
				autoValue: function(){
					return new Date()
				},
				autoform: {
					type: "hidden"
				}
			},
			author: {
				type: String,
				label: 'Author',
				autoValue: function(){
					return this.userId
				},
				autoform: {
					type: "hidden"
				}
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
			time: {
				type: String,
				label: 'Time to Prepare'
			},
			yield: {
				type: String,
				label: 'Yield'
			},
			img: {
				type: String,
				label: 'Image',
				optional: true
			},
			
			ingredients: {
				type: [IngredientsSchema]
			},
			paleo: {
				type: Boolean,
				label: 'Paleo'
			},
			primal: {
				type: Boolean,
				label: 'Primal'
			},
			keto: {
				type: Boolean,
				label: 'Keto'
			},
			vegan: {
				type: Boolean,
				label: 'Vegan'
			},
			vegetarian: {
				type: Boolean,
				label: 'Vegetarian'
			},
			crockpot: {
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

Template.NewRecipeForm.onCreated(function(){
	Session.set('fileUploaded', false);
	this.dbSearch = new ReactiveVar(false);
});

Template.NewRecipeForm.onRendered(function(){

	var hookObject = {
		before: {

			insert:function(doc){
				var numIngredients = $('.panel-body').length;
				console.log(numIngredients);

				for(var i = 0; i < numIngredients; i++){
					var name = $('input[name="ingredients.'+ i +'.name"]').val();
					var type = $('select[name="ingredients.'+ i +'.type"]').val();
					var aisle = $('input[name="ingredients.'+ i +'.aisle"]').val();
					console.log(`${name} and ${type} and ${aisle}.`);

					var conflict = Ingredients.findOne({$and: [{name: name}, {type: type}, {aisle: aisle}]});
					if (!conflict){
						Meteor.call('ingredientFromRecipe', name, type, aisle);
					}
				}
				return doc
			}
		}
		//Check ingredients for submitted recipe with existing ingredients
	}
	AutoForm.hooks({
		insertRecipeForm: hookObject
	});

});