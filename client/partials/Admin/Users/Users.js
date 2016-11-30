

Template.Users.events({
	/*
	'click .reactive-table tbody tr':function(e){
		var userId = this;
		$('.table-wrapper').addClass('hidden');

	}
	*/
})

Template.Users.helpers({
	users: function(){
		return Meteor.users.find({});
	},
	fields:function(){
		return [
			{
				key: 'username',
				label: 'Username',
				headerClass:function(){
					return 'text-center'
				},
				cellClass:function(){
					return 'text-center edit-user'
				}
			}, 
			{
				key: 'createdAt',
				label: 'createdAt',
				fn: function(value, object, key){
					return moment(value).format('MMM Do YYYY')
				},
				headerClass:function(){
					return 'text-center'
				},
				cellClass:function(){
					return 'text-center'
				}
			},
			{
				key: 'roles',
				label: 'Admin',
				fn: function(value, object, key){
					return ($.inArray('admin', value) > -1)
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
				label: 'ID',
				headerClass:function(){
					return 'text-center'
				},
				cellClass:function(){
					return 'text-center'
				}
			}
		]
	}
})

Template.Users.onCreated(function(){
	this.autorun(()=> {
		this.subscribe('allUsers');
	})
})