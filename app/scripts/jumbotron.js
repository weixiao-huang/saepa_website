
var img = document.getElementById('index_img');
var nav_height = $('nav').outerHeight();
var $arrow = $('#arrow');


// Initial state
for (var i = 0; i < img.childElementCount; ++i) {
  img.children[i].style.width = document.body.offsetWidth + 'px';
  img.children[i].style.marginTop = '-' + nav_height + 'px';
}
img.style.maxHeight = innerHeight - nav_height + 'px';


// When window is resize
window.addEventListener('resize', function(ev) {
  for (var i = 0; i < img.childElementCount; ++i) {
    img.children[i].style.width = document.body.offsetWidth + 'px';
    img.children[i].style.marginTop = '-' + nav_height + 'px';
  }
});

/* scroll down to container*/
$arrow.click(function() {
    $('html,body').animate({scrollTop:$('.container').offset().top}, 800);
});
