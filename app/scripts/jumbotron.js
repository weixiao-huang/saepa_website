
var img = document.getElementById('index_img');
var $nav_height = $('nav').outerHeight();
var $arrow = $('#arrow');

function putArrow(ar) {
  ar.style.left = document.body.offsetWidth / 2 - ar.offsetWidth / 2 + 'px';
  ar.style.top = innerHeight - ar.offsetHeight + 'px';
}

// Initial state
for (var i = 0; i < img.childElementCount; ++i) {
  img.children[i].style.width = document.body.offsetWidth + 'px';
  img.children[i].style.marginTop = '-' + $nav_height + 'px';
}
img.style.maxHeight = innerHeight - $nav_height + 'px';

var arrow = document.getElementById('arrow');
var arrowbg = document.getElementById('arrowbg');
putArrow(arrowbg);
putArrow(arrow);

// When window is resize
window.addEventListener('resize', function(ev) {
  for (var i = 0; i < img.childElementCount; ++i) {
    img.children[i].style.width = document.body.offsetWidth + 'px';
    img.children[i].style.marginTop = '-' + $nav_height + 'px';
  }
  putArrow(arrowbg);
  putArrow(arrow);
  img.style.maxHeight = innerHeight - $nav_height + 'px';
});

/* scroll down to container*/
$arrow.click(function() {
    $('html,body').animate({scrollTop:$('.container').offset().top}, 800);
});
