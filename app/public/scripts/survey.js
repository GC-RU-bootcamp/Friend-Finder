$("#submit").on("click", function (event) {
  event.preventDefault();

  // Form validation

  function validateForm() {
    let isValid = true;
    for (let i = 1; i <= 10; i++) {
      if (parseInt($("#q" + i).val()) < 1)
        isValid == false;
    }
    if ($("#name").val().trim === "") {
      isValid == false;
    }
    if ($("#photo").val().trim === "") {
      isValid == false;
    }
    return isValid
  };

  // If all required fields are filled
  if (validateForm()) {
    // Create an object for the user"s data
    var userData = {
      name: $("#name").val(),
      photo: $("#photo").val(),
      scores: [
        $("#q1").val(),
        $("#q2").val(),
        $("#q3").val(),
        $("#q4").val(),
        $("#q5").val(),
        $("#q6").val(),
        $("#q7").val(),
        $("#q8").val(),
        $("#q9").val(),
        $("#q10").val()
      ]
    };

    // AJAX post the data to the friends API.
    $.post("/api/friends", userData, function (data) {

      // Grab the result from the AJAX post so that the best match's name and photo are displayed.
      $("#match-name").text(data.name);
      $("#match-img").attr("src", data.photo);
      $("#mbti-name").text(data.mbti_score);
      $("#mbti-img").attr("src", data.mbti_image);

      // Show the modal with the best match
      $("#results-modal").modal("toggle");

    });
  } else {
    alert("Please fill out all fields before submitting!");
  }

  $("#mbti_btn").on("click", function (event) {
    event.preventDefault();
    $("#mbti-modal").modal("toggle");
  });

});