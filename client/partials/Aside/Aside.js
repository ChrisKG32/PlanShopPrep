
Template.Aside.events({
	'click ul a':function(e, tmpl){
		tmpl.active.set($(e.currentTarget).find('li').attr('id'));
	}
})


Template.Aside.helpers({
	active:function(param1){
		if (param1 === Template.instance().active.get()) {
			return 'active'
		} else {
			return false
		}
	}
});


Template.Aside.onCreated(function(){

	this.active = new ReactiveVar('view-recipes');
});