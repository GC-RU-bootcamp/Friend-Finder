// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/home", function(req, res) {
    // console.log("/home");
    console.log("/home : " + JSON.stringify(req.params));
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    // console.log("/survey");
    console.log("/survey : " + JSON.stringify(req.params));
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // app.get("/survey", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/survey.html"));
  // });

  app.get("/images/:imgfile", function(req, res) {
    // console.log("/image")
    console.log("/image : " + JSON.stringify(req.params));
    var imgfile = req.params.imgfile;
    res.sendFile(path.join(__dirname, "../public/images/" + imgfile));
    // res.sendFile(path.join(__dirname, "../public/images/smiley.png"));
  });

  app.get("/scripts/:scriptfile", function(req, res) {
    // console.log("/image")
    console.log("/scriptfile : " + JSON.stringify(req.params));
    var scriptfile = req.params.scriptfile;
    res.sendFile(path.join(__dirname, "../public/scripts/" + scriptfile));
    // res.sendFile(path.join(__dirname, "../public/images/smiley.png"));
  });

  app.get("/css/:cssfile", function(req, res) {
    // console.log("/image")
    console.log("/cssfile : " + JSON.stringify(req.params));
    var cssfile = req.params.cssfile;
    res.sendFile(path.join(__dirname, "../public/css/" + cssfile));
    // res.sendFile(path.join(__dirname, "../public/images/smiley.png"));
  });

  // If no matching route is found default to home
  app.get("/", function(req, res) {
    // console.log("/")
    console.log("/ :" + JSON.stringify(req.params));
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("*", function(req, res) {
    // console.log("*")
    console.log("* :" + JSON.stringify(req.params));
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
