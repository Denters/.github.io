var $line = $('.line');
var $button = $('.button');
var $c1=$('.c1');
var $a =$('a');
$button.on('click', function(){
  $line.toggleClass('active');
});
$a.on('click', function(){
  $a.toggleClass('visible');
})