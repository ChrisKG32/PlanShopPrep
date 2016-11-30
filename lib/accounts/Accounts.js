

//Roles customization
var postSignUp = function(userId, info){

	Roles.addUsersToRoles(userId, ['normal-user', info.profile['user_type']]);
}

AccountsTemplates.configure({
	postSignUpHook: postSignUp
});


// Login Field Customization
	AccountsTemplates.removeField('email');
	AccountsTemplates.removeField('password');

	AccountsTemplates.addFields([
		{
			_id: 'username',
			type: 'text',
			placeholder: ' ',
			displayName: 'Username',
			required: true,
			minLength: 3
		},
		{
			_id: 'password',
			displayName: ' ',
			placeholder: 'Password',
			type: 'password',
			required: true,
			minLength: 3,
			errStr: 'At least 1 digit, 1 lower-case and 1 upper-case'
		},
		{
			_id: 'password_again',
			displayName: ' ',
			placeholder: 'Confirm password',
			type: 'password',
			required: true,
			minLength: 3,
			errStr: 'At least 1 digit, 1 lower-case and 1 upper-case'
		},
		{
			_id: 'user_type',
			type: 'select',
			displayName: 'User Type',
			select: [
				{
					text: 'Admin',
					value: 'admin',
				},
				{
					text: 'Tester',
					value: 'tester',
				},
				{
					text: 'User',
					value: 'user',
				},
			]
		}
	])






