
$(document).ready(function() {
  $("button").click(function() {
    
      $(".dev_icon").toggle();
  $("button").click(function(event) {
      event.preventDefault();
      $(".dev").toggle();
        $("p").toggle()

  });

});



(function($) {
(document).ready(function() {
  $("button").click(function() {
      $(".design_icon").toggle();
  $("button").click(function() {
      $(this).closest(".design_icon").toggleClass(active);
      $(this).closest(".design_icon").find(".design_icon").stop().toggle;

  });

});

});
});

(function($){
(document).ready(function() {
  $("button").click(function() {
      $(".product").toggle();
  $("button").click(function() {      
      $(".product").toggle();
        $("p").toggle()

  });

});

});

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



      


 
