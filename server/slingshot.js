/*
Slingshot.createDirective("myFileUploads", Slingshot.S3Storage, {
  bucket: "availbucket",

  acl: "public-read",

  authorize: function () {
    //Deny uploads if user is not logged in.
    if (!this.userId) {
      var message = "Please login before posting files";
      throw new Meteor.Error("Login Required", message);
    }

    return true;
  },

  key: function (file) {
    //Store file into a directory by the user's username.
    var user = Meteor.users.findOne(this.userId);
    return user.username + "/" + file.name;
  }
});
*/
/*
Slingshot.fileRestrictions( "uploadToAmazonS3", {
  allowedFileTypes: [ "image/png", "image/jpeg", "image/gif" ],
  maxSize: 1 * 1024 * 1024
});

Slingshot.createDirective( "uploadToAmazonS3", Slingshot.S3Storage, {
  bucket: "availbucket",
  acl: "public-read",
  authorize: function () {
    let userFileCount = Files.find( { "userId": this.userId } ).count();
    return userFileCount < 3 ? true : false;
  },
  key: function ( file ) {
    var user = Meteor.users.findOne( this.userId );
    return user.emails[0].address + "/" + file.name;
  }
});
*/

Slingshot.fileRestrictions( "uploadToAmazonS3", {
  allowedFileTypes: [ "image/png", "image/jpeg", "image/gif" ],
  maxSize: 100 * 1024 * 1024
});

Slingshot.createDirective( "uploadToAmazonS3", Slingshot.S3Storage, {
  bucket: "planshopprep",
  acl: "public-read",
  authorize: function () {
    // let userFileCount = Files.find( { "userId": this.userId } ).count();
    //return userFileCount < 3 ? true : false;
    return true
  },
  key: function ( file ) {
   // var user = Meteor.users.findOne( this.userId );
    return ("images/" + file.name)//user.emails[0].address + "/" + file.name;
  }
});