Meteor.publish('allUsers', function(){
	if (Roles.userIsInRole(this.userId), 'admin'){
		return Meteor.users.find({});
	}
	
});


Meteor.publish('allRecipes', function(){
	if (Roles.userIsInRole(this.userId), 'admin'){
		return Recipes.find({});
	}
	
});

Meteor.publish('allIngredients', function(){
	if (Roles.userIsInRole(this.userId), 'admin'){
		return Ingredients.find({});
	}
	
});

Meteor.publish('allMeasurements', function(){
	if (Roles.userIsInRole(this.userId), 'admin'){
		return Measurements.find({});
	}
	
});

Meteor.publish('allUSDA', function(){
	if (Roles.userIsInRole(this.userId), 'admin'){
		return USDA.find({});
	}
	
});


Meteor.publish( 'files', function(){
  var data = Files.find( { "userId": this.userId } );

  if ( data ) {
    return data;
  }

  return this.ready();
});