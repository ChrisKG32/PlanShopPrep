Template.EditRecipe.onCreated(function(){

	this.autorun(()=> {
		this.subscribe('allRecipes');
	})
	
});

Template.EditRecipe.helpers({
	recipes:function(){
		return Recipes.find({});
	},
	thisRecipe:()=> {
		var id = FlowRouter.getParam('id');
		return Recipes.findOne(id);
	}
})