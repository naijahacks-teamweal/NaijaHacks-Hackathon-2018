$("#indicators li:first-child").addClass("active");

function slide(target) {
  $("#indicators li").removeClass("active").eq(target).addClass("active");
  $("#slider ul li").animate({
    'right': +350 * target + 'px'
  }, 250);
}

$("#indicators li").click(function() {
  var target = $(this).index();
  slide(target);

  //Stopped auto slide when user clicked
  clearInterval(timer);
  //Then started auto slide again
  timer = setInterval(function() {
    $('#next').trigger('click');
  }, 2500);

});

$("#next").click(function() {
  var target = $("#indicators li.active").index();
  if (target === $("#indicators li").length - 1) {
    target = -1;
  }
  target = target + 1
  slide(target);

  //Stopped auto slide when user clicked
  clearInterval(timer);
  //Then started auto slide again
  timer = setInterval(function() {
    $('#next').trigger('click');
  }, 2500);

});

$("#prev").click(function() {
  var target = $("#indicators li.active").index();
  if (target === 0) {
    target = $("#indicators li").length;
  }
  target = target - 1;
  slide(target);

  //Stopped auto slide when user clicked
  clearInterval(timer);
  //Then started auto slide again
  timer = setInterval(function() {
    $('#next').trigger('click');
  }, 2500);

});

//Auto slide
var timer = null;
timer = setInterval(function() {
  $('#next').trigger('click');
}, 1000);



/* fIRST SLIDER */

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);


$("#slideshow2 > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow2 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow2');
},  3000);


$("#slideshow3 > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow3 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow3');
},  3000);