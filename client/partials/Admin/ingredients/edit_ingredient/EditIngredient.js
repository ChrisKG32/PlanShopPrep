Template.EditIngredient.onCreated(function(){

	this.autorun(()=> {
		this.subscribe('allIngredients');
	});
});


Template.EditIngredient.helpers({
	ingredients:function(){
		return Recipes.find({});
	},
	thisIngredient:()=> {
		var id = FlowRouter.getParam('id');
		return Ingredients.findOne(id);
	},
	editSchema:function(){
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
			ndbno: {
				type: Number,
				label: 'NDB Number'
			},
			name: {
				type: String,
				label: 'Name'
			},
			aisle: {
				type: String,
				label: 'Aisle'
			}

		});




		return IngredientsSchema
	}
})