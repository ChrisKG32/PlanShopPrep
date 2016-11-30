
Recipes = new Mongo.Collection('recipes');


Recipes.allow({
	insert: function(userId, doc){
		return !!userId;
	}
})

	Ingredient = new SimpleSchema({
		name: {
			type: String,
			label: 'Name'			
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

	RecipeSchema = new SimpleSchema({
		_id: {
			type: String,
			label: 'id',
			autoform: {
				type: 'hidden'
			}
		},
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
			type: [Ingredient]
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


	Recipes.attachSchema(RecipeSchema);
