Meteor.publish('allUsers', function(){
	if (Roles.userIsInRole(this.userId), 'admin'){
		return Meteor.users.find({});
	}
	
})


Meteor.publish('allRecipes', function(){
	if (Roles.userIsInRole(this.userId), 'admin'){
		return Recipes.find({});
	}
	
})