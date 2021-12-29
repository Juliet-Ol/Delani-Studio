function Icon(dev, design, prod) {
  this.dev_icon = dev
  this.design_icon = design
  this.product = prod

}


$(document).ready(function() {

$("button").click(function(event) {
    event.preventDefault();
    $(".dev").toggle();
      $(p).toggle()

   
    
    }); 

});

 $(document).ready(function() {
 $this.ready("button").onClick(function() {
    $("design_icon").toggle();
    $(p).toggle()

 });

});
 
 $("button").onClick(function() {
  $("product").toggle();
  $(p).toggle()
    
});






// $(document).ready(function() {
//     const newLocal = $("button").click(function () {
//     $("product").toggle();
// });

//     });
// });

// $(document).ready(function() {
//     $("button").onClick(function()cancelIdleCallback {
//         $("product").toggle();
//     });
// });

// $(document).ready(function() {
// $(".image/delani7.jpg").hover(function(){
//     $(this).stop(true,true).fadeOut()
// }, function(){
//     $(this).stop(true,true).fadeIn()
    
// });

$(document).ready(function(){
    $("image/delani7.jpg").hover(function(){
      $("p").fadeTo("slow", 0.15);
    });
  });




    // $(this).css("background-color","white");
    // }, function(){
    //   $(this).css ("background-color, black") 
    // });

function alert(){
  var Name = document.getElementById("Name")
  var Email = document.getElementById("Email")
  var message = document.getElementById("message")

  if (Name == " ")
   alert("enter name")

   else if (Email == " ") {
    alert("enter email")

    else (message == " ")
      alert("enter message")
  
}

// <submitButton onClick {   
//   (newFunction) => { }())

//   function (newFunction()) {
//     submitButton onclick
//     return 'we have received your message. Thank you for reaching out to us';
//   }
}