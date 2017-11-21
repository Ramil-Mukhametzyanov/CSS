function callmodal(){
 $('#blackwall').fadeIn(500, function(){
  $("#modal").css({
   'transform': 'scale(1,1)'
   });
   $('body').addClass('blockScroll');
 });
}
$('a.hider').on('click',function(){
 $('#modal').css({
  'transform': 'scale(0,0)'
 });
 setTimeout(function(){
  $('#blackwall').fadeOut(500);
  $('body').removeClass('blockScroll');
 },300);
});
