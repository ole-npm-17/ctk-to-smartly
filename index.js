var request = require("request");
const API_BASE_URL = 'https://abcde-ctk.kmt.orange.com/ctk/json/ctk';

module.exports = {
  sendImageMedia: sendImageMedia
};

function sendImageMedia(fileName, fileSize, fileUri, botId, userNumber){
	var json = {
	  "bot": function(){ return botId; }(),
	  "user": function(){ return userNumber }(),
	  "message": { "messageId":"", "message": { "contentMessage": {

			"media": {
			  "category": "IMAGE",
			  "thumbnail": {
				  "mimeType": "image/png",
				  "fileSize": function(){ return fileSize }(),
				  "fileName": function(){ return fileName }(),
				  "fileUri": function(){ return fileUri}()
			  },
			  "payload": {
				  "mimeType": "image/png",
				  "fileSize": function(){ return fileSize }(),
				  "fileName": function(){ return fileName }(),
				  "fileUri": function(){ return fileUri}()
			  }
		  } 
	 }}}
	}

	console.log("JSON: ", json);
	
	var options = { method: 'POST',
	  url: API_BASE_URL + '/send',
	  headers: 
	   { 
		authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkIjp7InRpbWUiOjE1MDU3MjgwNDMsInVzZXIiOiIzMzY0NTMzMzgyMyJ9LCJ2IjowLCJpYXQiOjE1MDU3MjgwNDN9.IHk2yczEYaTQt3RBYKqdUZC6ABqMccu2b69qLqx0N48',
		'content-type': 'application/json' },
	  body: json,
		 json: true };
		 
	request(options, function (error, response, body) {
	  if (error) throw new Error(error);

	  console.log(body);
	});
	
}