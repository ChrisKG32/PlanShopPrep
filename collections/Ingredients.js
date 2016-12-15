Ingredients = new Mongo.Collection('ingredients');

Ingredients.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function(userId, doc){
		return !!userId;
	},

});


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




Ingredients.attachSchema(IngredientsSchema);