

Template.Popup.events({
	'click .fa-close, click .cancel-delete':function(e){
		Session.set('selectedIngredient', false);
		Session.set('selectedRecipe', false);
	},
	'click .delete':function(e){
		if (Session.get('selectedIngredient')) {
			var entry = Session.get('selectedIngredient');
			var type = 'ingredient';
		} else if (Session.get('selectedRecipe')){
			var entry = Session.get('selectedRecipe');
			var type = 'recipe';
		}
		
		Meteor.call('deleteEntry', entry, type, function(){
			Session.set('selectedIngredient', false);
			Session.set('selectedRecipe', false);
		});
	}
});

Template.Popup.helpers({
	selectedIngredient:function(){
		return Session.get('selectedIngredient') || Session.get('selectedRecipe');
	}
});