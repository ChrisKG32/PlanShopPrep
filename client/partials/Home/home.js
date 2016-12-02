

Template.uploader.events({
  'change input[type="file"]':function ( event, template ) {
    console.log(event);
    Modules.client.uploadToAmazonS3( { event: event, template: template } );
  }
});


Template.files.onCreated( () => Template.instance().subscribe( 'files' ) );

Template.files.helpers({
  files() {
    var files = Files.find( {}, { sort: { "added": -1 } } );
    if ( files ) {
      return files;
    }
  }
});

Template.file.helpers({
  isImage( url ) {
    const formats = [ 'jpg', 'jpeg', 'png', 'gif' ];
    return _.find( formats, ( format ) => url.indexOf( format ) > -1 );
  }
});










/*
var uploader = new Slingshot.Upload("myFileUploads");

uploader.send(document.getElementById('test-upload').files[0], function (error, downloadUrl) {
  if (error) {
    // Log service detailed response
    console.error('Error uploading', uploader.xhr.response);
    alert (error);
  }
  else {
    Meteor.users.update(Meteor.userId(), {$push: {"profile.files": downloadUrl}});
  }
});
*/
