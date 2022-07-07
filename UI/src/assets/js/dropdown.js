
$(document).ready(function(){
  alert();
  var menuHeader = $('.dropdown-header');
  // var menuHeadertoggle = $('.dropdown-header').attr('data-toggle');
  // var menuContainer = $('.dropdown-header ~ .dropdown-container').attr('id'); //$("#"+ menuHeadertoggle).attr('id');
      menuHeader.click(function(){
        var select = $(this);
        var menuHeadertoggle = select.attr('data-toggle');
        //var menuContainer = $('.dropdown-header ~ .dropdown-container').attr('id');
        var menuContainer = select.siblings(".dropdown-container").attr('id');
     
        $("#"+ menuContainer).toggleClass("active");
      });


//var menuContainer = $('.dropdown-header.dropdown-container');
// alert(menuHeadertoggle);
//   menuHeader.click(function(){
  
//     alert(menuContainer);
//     $("#"+ menuContainer).toggleClass("active");
//   });
 
 

// var menuHeader = document.querySelector('.dropdown-header');
// var menuContainer = document.querySelector('.dropdown-container');

// menuHeader.addEventListener('click', function() {
//   menuContainer.classList.toggle('active');
// });

// //Flickity Init
// var flkty = new Flickity('.dropdown-carousel', {
//   draggable: false,
//   prevNextButtons: false,
//   pageDots: false,
//   adaptiveHeight: true
// });


});