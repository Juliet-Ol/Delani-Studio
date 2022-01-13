
$(document).ready(function() {

    $(".click").click(function() {
        $(this).children('.content').toggleClass('active');
        $(this).children('img').toggleClass('inactive');
        $(this).children('h3').toggleClass('inactive');
    });
});

    function show(){
      var Name = document.getElementById("Name")
      var Email = document.getElementById("Email")
      var yourMessage = document.getElementById("message")
      var submit = document.getElementById(alert)

      if (Name == " ")
      show("enter name")

      else if (Email == " ") 
        show("enter email")

        else if (yourMessage == " ") 
          show("your message")
      
        
        }; 

        
      $("#submitForm").click(function() {
        alert("'we have received your message. Thank you for reaching out to us'.");
      });
