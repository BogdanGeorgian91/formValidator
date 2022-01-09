$("#submit-btn").on("click", function (event) {
    var name = $("#name").val();
    var email = $("#mail").val();
    var phone = $("#phone").val();

    //name validation
    if (name === "" || name == null || name == undefined || name.trim() == "") {
      $(".error-message").removeClass("hidden"); //show invalid button
      $(".success-message").addClass("hidden");
      $("#errorname").show();
      $("#errorname").text("Name is required!");
      return false;
    } else {
      var pattern_name = /^[a-zA-Z ]+$/;
      if (!pattern_name.test(name)) {
        $(".error-message").removeClass("hidden"); //show invalid button
        $(".success-message").addClass("hidden"); //show valid button
        $("#errorname").show();
        $("#errorname").text("Enter a valid name");
        return false;
      } else {
        $("#errorname").hide();
      }  
    }

    //email validation
    if (email === "" || email === null || email === undefined || email.trim() === "") {
      $(".error-message").removeClass("hidden"); //show invalid button
      $("#erroremail").show();
      $("#erroremail").text("Email is required!");
      return false;
    } else {
      var pattern_email = /^[a-zA-Z0-9.%_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,10}$/;
      if (!pattern_email.test(email)) {
        $(".error-message").removeClass("hidden"); //show invalid button
        $(".success-message").addClass("hidden"); //show valid button
        $("#erroremail").show();
        $("#erroremail").text("Enter a valid email");
        return false;
      }
      $("#erroremail").hide();
    }

    //phone validation
    if (phone === "" || phone == null || phone == undefined || phone.trim() == "") {
      $(".error-message").removeClass("hidden"); //show invalid button
      $("#errorphone").show();
      $("#errorphone").text("Phone number is required!");
      return false;
    } else {
      var pattern_phone = /^\d{10}$/;

      if (!pattern_phone.test(phone)) {
        $(".error-message").removeClass("hidden"); //show invalid button
        $(".success-message").addClass("hidden"); //show valid button
        $("#errorphone").show();
        $("#errorphone").text("Enter a valid phone number");
        return false;
      } else {
        $("#errorphone").hide();
      }
    }

    $(".error-message").addClass("hidden");
    $("#errorname").hide();
    $("#erroremail").hide();
    $("#errorphone").hide();
    $(".success-message").removeClass("hidden");
    return true;
  });