

Template.ViewRecipes.events({
	'click .reactive-table tr':function(e, tmpl){
		FlowRouter.go('/admin/edit-recipe/' + this._id);
	}
});


Template.ViewRecipes.onCreated(function(){

	this.autorun(()=> {
		this.subscribe('allRecipes');
	});
});

Template.ViewRecipes.helpers({
	'recipePage':function(param1){
		return Session.get('recipePage') === param1
	},
	recipes: function(){
		return Recipes.find({});
	},
	fields:function(){
		return [
			{
				key: 'name',
				label: 'Name',
				headerClass:function(){
					return 'text-center'
				},
				cellClass:function(){
					return 'text-center edit-user'
				}
			}, 
			{
				key: 'category',
				label: 'Category',
				headerClass:function(){
					return 'text-center'
				},
				cellClass:function(){
					return 'text-center'
				}
			},
			{
				key: 'difficulty',
				label: 'Difficulty',
				
				headerClass:function(){
					return 'text-center'
				},
				cellClass:function(){
					return 'text-center'
				}
			},
			{
				key: 'ingredients',
				label: 'Ingredients',
				fn: function(value, object, key){
					return (value.length) + ' ingredients'
				},
				headerClass:function(){
					return 'text-center'
				},
				cellClass:function(){
					return 'text-center'
				}
			}
		]
	}
});










