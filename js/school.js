"use strict";
$(document).ready( () => {


    // the handler for the click event of the submit button
    $("#newsletter").submit( event => {
        let isValid = true; 
        // validate the first name entry
        const firstName = $("#first_name").val().trim();
        if (firstName == "") {
            $("#first_name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#first_name").next().text("");
        }
        $("#first_name").val(firstName);
                    
        // validate the last name entry
        const lastName = $("#last_name").val().trim();
        if (lastName == "") {
            $("#last_name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#last_name").next().text("");
        }
        $("#last_name").val(lastName);

        
        // validate the email entry with a regular expression
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email = $("#email").val().trim();
        if (email == "") { 
            $("#email").next().text("This field is required.");
            isValid = false;
        } else if ( !emailPattern.test(email) ) {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }
        $("#email").val(email);
        // prevent the submission of the form if any entries are invalid 
        if (isValid == false) {
            event.preventDefault();                
        }
    });
    $('.count').each(function () {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.attr('data-stop') }, {
          duration: 5000,
          easing: 'swing',
          step: function (now) {
            $this.text(Math.ceil(now));
          }
        });
      });
      

});