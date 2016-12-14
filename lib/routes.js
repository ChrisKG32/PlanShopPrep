
if (Meteor.isClient){

	Accounts.onLogin(function(){
		FlowRouter.go('home');

	})

	Accounts.onLogout(function(){
		FlowRouter.go('home');

	})
}

//Standard Routes

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


//Admin Routes

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

	adminRoutes.route('/new-ingredient', {
		name: 'new-ingredient',
		action() {
			BlazeLayout.render('MainLayout', {main: 'NewIngredient'});
		}
	});

	adminRoutes.route('/edit-ingredient/:id', {
		name: 'edit-ingredient',
		action() {
			BlazeLayout.render('MainLayout', {main: 'EditIngredient'});
		}
	});

	adminRoutes.route('/view-ingredients', {
		name: 'view-ingredients',
		action() {
			BlazeLayout.render('MainLayout', {main: 'ViewIngredients'});
		}
	});

	adminRoutes.route('/upload-csv', {
		name: 'upload-csv',
		action() {
			BlazeLayout.render('MainLayout', {main: 'Upload'});
		}
	});



