
function typeName(){
    const name = "Garrick Griffith";
    let tempName = ""
    let count = 0;
    function loop(){
      setTimeout(function(){
        tempName += name[count];
        $("#writeName").html(tempName);
        count++;
        if(count < name.length){
          loop();
        }
      },200);
    }
    loop();
}
function introEffect(){
  setTimeout(function(){
    $("#develop").css("visibility","visible");
  },1000);
  setTimeout(function(){
    $("#learn").css("visibility","visible");
  },2000);
  setTimeout(function(){
    $("#grow").css("visibility","visible");
  },3000);
}
$(document).ready(function(){
  var tempScroll= window.pageYOffset;
  $(window).scroll(function(){
  var scrollNum = window.pageYOffset || $(window).scrollTop();
    if(scrollNum > tempScroll && scrollNum > 50){
      $("#globalNav").css("height","0");
      $("#globalNav ul").css("opacity","0");
    }
    else{
      $("#globalNav").css("height", "5vh");
      $("#globalNav ul").css("opacity","1");
    }
      tempScroll = scrollNum;
  });
  //introEffect();
});
