
if (Meteor.isClient){

	Accounts.onLogin(function(){
		FlowRouter.go('home');

	})

	Accounts.onLogout(function(){
		FlowRouter.go('home');

	})
}


FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Home'});
	}
});

FlowRouter.route('/login', {
	name: 'login',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Login'});
	}
});

var adminRoutes = FlowRouter.group({
	prefix: '/admin',
	name: 'admin'
});


adminRoutes.route('/users', {
	name: 'users',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Users'});
	}
});

adminRoutes.route('/view-recipes', {
	name: 'view-recipes',
	action() {
		BlazeLayout.render('MainLayout', {main: 'ViewRecipes'});
	}
});

adminRoutes.route('/edit-recipe/:id', {
	name: 'edit-recipes',
	action() {
		BlazeLayout.render('MainLayout', {main: 'EditRecipe'});
	}
});

adminRoutes.route('/new-recipe', {
	name: 'new-recipe',
	action() {
		BlazeLayout.render('MainLayout', {main: 'NewRecipe'});
	}
});

