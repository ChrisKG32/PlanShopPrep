USDA = new Mongo.Collection('usda');

USDA.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function(userId, doc){
		return !!userId;
	},
});