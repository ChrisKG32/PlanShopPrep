

Template.ViewRecipes.events({
	'click .reactive-table tbody tr':function(e, tmpl){
		if ($(e.target).hasClass('edit-recipe')){
			FlowRouter.go('/admin/edit-recipe/' + this._id);
		} else if ($(e.target).hasClass('delete-entry')){
			Session.set('selectedRecipe', this);
		}
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
					return 'text-center edit-recipe'
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
			},
			{
				key: '_id',
				label: 'Delete',
				fn: function(){
					return 'Delete'
				},
				headerClass:function(){
					return 'text-center'
				},
				cellClass:function(){
					return 'text-center delete-entry'
				}

			}
		]
	}
});










