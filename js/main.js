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
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll <= $('#landing').height()){
        $('#menu_open').css('color', 'rgb(220,220,220)');
    } else{
        $('#menu_open').css('color', 'rgb(50,50,50)');
    }
});
