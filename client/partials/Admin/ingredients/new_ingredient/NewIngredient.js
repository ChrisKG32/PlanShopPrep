Template.NewIngredient.onCreated(function(){

	this.autorun(()=> {
		this.subscribe('allIngredients');
	});
	SimpleSchema.debug = true;
});

Template.NewIngredient.helpers({
	Ingredients:function(){
		return Ingredients.find({})
	},
	schema:function(){
		var IngredientsSchema = new SimpleSchema({

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
			name: {
				type: String,
				label: 'Name'
			},
			type: {
				type: String,
				label: 'Type',
				allowedValues: [
					'volume',
					'weight'
				],
				autoform: {
					options: [
						{
							label: 'Volume',
							value: 'volume'
						},
						{
							label: 'Weight',
							value: 'weight'
						}
					]
				}
			},
			measurement: {
				type: String,
				label: 'Measuring Unit'
			},
			aisle: {
				type: String,
				label: 'Aisle'
			}

		});
		return IngredientsSchema
	}
})