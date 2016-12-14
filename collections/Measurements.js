Measurements = new Mongo.Collection('measurements');

Measurements.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function(userId, doc){
		return !!userId;
	},

});

MeasurementsSchema = new SimpleSchema({
	createdBy: {
		type: String,
		label: 'Created By',
		autoValue:function(){
			return this.userId
		},
		autoform: {
			type: 'hidden'
		}
	},
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
	name: {
		type: String,
		label: 'Name'
	},
	value: {
		type: String,
		label: 'Value'
	}
});



Ingredients.attachSchema(MeasurementsSchema);