
Template.ViewIngredients.events({
	'click .reactive-table tbody tr':function(e, tmpl){
		if ($(e.target).hasClass('edit-ingredient')){
			FlowRouter.go('/admin/edit-ingredient/' + this._id);
		} else if ($(e.target).hasClass('delete-entry')){
			Session.set('selectedIngredient', this);
		}
	}
});

Template.ViewIngredients.helpers({
	ingredients:function(){
		return Ingredients.find({})
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
					return 'text-center edit-ingredient'
				}
			}, 
			{
				key: 'type',
				label: 'Type',
				headerClass:function(){
					return 'text-center'
				},
				cellClass:function(){
					return 'text-center'
				}
			},
			{
				key: 'aisle',
				label: 'Aisle',
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

Template.ViewIngredients.onCreated(function(){

	this.autorun(()=> {
		this.subscribe('allIngredients');
	});
});