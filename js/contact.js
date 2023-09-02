document.getElementById("myForm").onsubmit = function(){
  return validateForm(); 
};
// Contact Form
function validateForm() {
  // debugger;
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var subject = document.forms["myForm"]["subject"].value;
  var message = document.forms["myForm"]["message"].value;
  var number = document.forms["myForm"]["number"].value;
  document.getElementById("error-msg").style.opacity = 0;
  document.getElementById('error-msg').innerHTML = "";
  if (name == "" || name == null) {
    document.getElementById("error-msg").style.opacity = 100;
    document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Name*</div>";
    fadeIn();
    return false;
  }
  if (email == "" || email == null) {
    document.getElementById("error-msg").style.opacity = 100;
    document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Email*</div>";
    fadeIn();
    return false;
  }
  if (subject == "" || subject == null) {
    document.getElementById("error-msg").style.opacity = 100;
    document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Subject*</div>";
    fadeIn();
    return false;
  }
  if (message == "" || message == null) {
    document.getElementById("error-msg").style.opacity = 100;
    document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a message*</div>";
    fadeIn();
    return false;
  }

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("simple-msg").innerHTML = this.responseText;
      document.forms["myForm"]["name"].value = "";
      document.forms["myForm"]["email"].value = "";
      document.forms["myForm"]["subject"].value = "";
      document.forms["myForm"]["message"].value = "";
      document.forms["myForm"]["number"].value = "";
    }
  };
  // debugger;
  xhttp.open("POST", "./php/contact.php");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.setRequestHeader("Access-Control-Allow-Credentials", "true");
  xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhttp.send("name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message + "&number=" + number);
  return false;
}
function fadeIn() {
  var fade = document.getElementById("error-msg");
  var opacity = 0;
  var intervalID = setInterval(function () {
    if (opacity < 1) {
      opacity = opacity + 0.5
      fade.style.opacity = opacity;
    } else {
      clearInterval(intervalID);
    }
  }, 200);
}



// Working Contact Form
// $('#contact-form').submit(function(e) {
//   e.preventDefault();
//   var action = $(this).attr('action');
//   var message = "";
//   if($('#name').val() == "" || $.trim($('#name').val()) == "") {
//     message = '<div class="error_message">You must enter your name.</div>';
//   } 
//   else if($('#email').val() == "" || $.trim($('#email').val()) == "") {
//     message = '<div class="error_message">Please enter a valid email address.</div>';
//   }
//   else if($('#number').val() == "" || $.trim($('#number').val()) == "") {
//     message = '<div class="error_message">Please enter your number.</div>';
//   } 
//   else if($('#subject').val() == "" || $.trim($('#subject').val()) == "") {
//     message = '<div class="error_message">You must enter subject.</div>';
//   } 
//   else if($('#message').val() == "" || $.trim($('#message').val()) == "") {
//     message = '<div class="error_message">You must enter your message.</div>';
//   }
//   if(message != "") {
//     document.getElementById('message-box').innerHTML = message;
//     $('#message-box').slideDown('slow');
//     $('#cform img.contact-loader').fadeOut('slow', function() {
//         $(this).remove()
//     });
//     $('#submit').removeAttr('disabled');
//     $('#cform').slideUp('slow');
//     return false;
//   } else {
//     $("#message-box").slideUp(750, function() {
//         $('#message-box').hide();

//         $('#submit')
//             .before('')
//             .attr('disabled', 'disabled');

//         $.post(action, {
//                 name: $('#name').val(),
//                 email: $('#email').val(),
//                 email: $('#number').val(),
//                 subject: $('#subject').val(),
//                 message: $('#message').val(),
//             },
//             function(data) {
//                 document.getElementById('message-box').innerHTML = data;
//                 $('#message-box').slideDown('slow');
//                 $('#cform img.contact-loader').fadeOut('slow', function() {
//                     $(this).remove()
//                 });
//                 $('#submit').removeAttr('disabled');
//                 $('#cform').slideUp('slow');
//             }
//         ).fail(function() {
//           document.getElementById('message-box').innerHTML = "<fieldset><div id='success_page'><h3>Email Sent Successfully.</h3><p>Thank you, your message has been submitted to us.</p></div></fieldset>";
//           $('#message-box').slideDown('slow');
//           $('#cform img.contact-loader').fadeOut('slow', function() {
//               $(this).remove()
//           });
//           $('#submit').removeAttr('disabled');
//           $('#cform').slideUp('slow');
//         });
//     });
//   }

//   return false;

// });

// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//   'use strict'
  
//   window.addEventListener('load', function () {
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.getElementsByClassName('needs-validation')

//     // Loop over them and prevent submission
//     Array.prototype.filter.call(forms, function (form) {
//       form.addEventListener('submit', function (event) {
//         if (form.checkValidity() === false) {
//           event.preventDefault()
//           event.stopPropagation()
//         }
//         form.classList.add('was-validated')
//       }, false)
//     })
//   }, false)
// }())