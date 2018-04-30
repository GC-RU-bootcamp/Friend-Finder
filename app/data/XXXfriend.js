var uuid = require("uuid/v4");

var friend = function(name, photo, scores)
  {
  this.name = name;
  this.photo = photo;
  this.scores = scores;
  this.uuid = uuid.create();
  };
  
 