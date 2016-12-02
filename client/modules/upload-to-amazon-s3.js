let template;
let _getFileFromInput = (event) => event.target.files[0];
//let _setPlaceholderText = (string = 'Click or Drag a file here to upload') => {
//	template.find('.alert span').innerText = string;
//}

let _addUrlToDatabase = ( url ) => {
  Meteor.call( "storeUrlInDatabase", url, ( error ) => {
    if ( error ) {
      Bert.alert( error.reason, "warning" );
      //_setPlaceholderText();
    } else {
      Bert.alert( "File uploaded to Amazon S3!", "success" );
      //_setPlaceholderText();
    }

    return url
  });
};


let _uploadFileToAmazon = (file) => {
	const uploader = new Slingshot.Upload('uploadToAmazonS3');

	uploader.send(file, (error, url) => {
		if (error){
			Bert.alert(error.message, "warning");
			//_setPlaceholderText();
		} else {
			//Bert.alert( "Image upload successfully.", "success" );
			_addUrlToDatabase(url);
			console.log(url);
		}
	});
};

let upload = (options) => {
	template = options.template;
	let file = _getFileFromInput(options.event);

	//_setPlaceholderText('Uploading ' + file.name + '...');
	_uploadFileToAmazon(file);
};

Modules.client.uploadToAmazonS3 = upload;