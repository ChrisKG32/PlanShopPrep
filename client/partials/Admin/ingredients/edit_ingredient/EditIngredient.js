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
	}
})