function openMenu(){
  $('#menu_open').css('display','none');
  $('#menu').css('width','100vw');
  $('.item').css('width','100%');
  $('.item').css('opacity','1');
}
function closeMenu(){
  $('#menu').css('width','0%');
  $('#menu_open').css('display','block');
  $('.item').css('width','0%');
  $('.item').css('opacity','0');
}
// Create the measurement node
var scrollDiv = document.createElement("div");
scrollDiv.className = "scrollbar-measure";
$('body').append(scrollDiv);

// Get the scrollbar width
var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
console.warn(scrollbarWidth); // Mac:  15

// Delete the DIV
$('body').remove(scrollDiv);
