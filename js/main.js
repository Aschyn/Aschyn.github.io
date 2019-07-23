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
var order;
function addClick(dom){

  $("#"+dom).click(function(event) {
      alert('clicked inside');
      event.stopPropagation();
  });
}

function hideOverlay(dom){
  $('#'+dom)[0].classList.add('d-none');
  $('.tint-overlay')[0].style.display = "none";
    $(document).off("click");
}

function showOverlay(dom){
  $('#'+dom)[0].classList.remove('d-none');
  $('.tint-overlay')[0].style.display = "block";
  setTimeout(function(){
    $(document).on("click", function(e) {
      var container = $(".overlay");
      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0)
        {
          hideOverlay(dom);
        }
    });
  }, 500);
  /*$(document).on("click", function(){
    alert('clicked outside');
  });
  $('#'+dom)[0].click(function(event){
    alert('clicked inside');
    event.stopPropagation();
  })*/

}
/*function heightMatch(){
  var height = 0;
  for (var x = 0; x < $('.example').length; x++){
    $('.example')[x].style.height = '100%';
    if($('.example')[x].offsetHeight > height){
      height = $('.example')[x].offsetHeight;
    }
  }
  for (var x = 0; x < $('.example').length; x++){
    $('.example')[x].style.height = height+'px';
  }
}
$(document).ready(function(){
  heightMatch();
  $(window).resize(function(){
    console.log($(window).width());
    if($(window).width() > 768){
      heightMatch();
    }
    else{
      for (var x = 0; x < $('.example').length; x++){
        $('.example')[x].style.height = '100%';
      }
    }
  });
});*/
