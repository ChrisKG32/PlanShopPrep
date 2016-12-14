Template.Upload.onCreated(function() {
	Template.instance().uploading = new ReactiveVar(false);
});

Template.Upload.helpers({
	uploading:function(){
		return Template.instance().uploading.get();
	}
});

Template.Upload.events({
	'change [name="uploadCSV"]':function(event, template){
		//something code
		Papa.parse(event.target.files[0], {
			header: true,
			complete(results, file){
				Meteor.call('parseUpload', results.data, (error, response) => {
					if (error){
						Bert.alert(error.reason, 'warning');
					} else {
						template.uploading.set(false);
						Bert.alert('Uploading complete!', )
					}
				})
			}
		});
	}
})