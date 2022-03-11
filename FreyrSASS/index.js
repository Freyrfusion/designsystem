$(document).ready(function() {
    $(".dropdown-menu .item").on('click',function() {
      $(this).find('ul').toggle();
     // $(".drop-open").show();
    });
   
    // $(".drop-open").on('click',function() {
      
    //     $(".dropdown-menu").find('ul').hide();
    //     $(".drop-open").hide();
    // });
  });

  // Dropdown
  // Dropdown Menu
var dropdown = document.querySelectorAll('.collapse-dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="collapsedropdown"]'),
			menu = el.querySelector('.collapse-dropdown-menu'),
			arrow = button.querySelector('i.icon-arrow');

	button.onclick = function(event) {
		if(!menu.hasClass('show')) {
			menu.classList.add('show');
			menu.classList.remove('hide');
			arrow.classList.add('open');
			arrow.classList.remove('close');
			event.preventDefault();
		}
		else {
			menu.classList.remove('show');
			menu.classList.add('hide');
			arrow.classList.remove('open');
			arrow.classList.add('close');
			event.preventDefault();
		}
	};
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};