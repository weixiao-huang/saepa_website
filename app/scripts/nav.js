/**
 * Created by huangwx on 16-10-30.
 */

// $("li").hover(function () {
//   $(this).addClass('nav_hover');
// }, function () {
//   $(this).removeClass('nav_hover');
// });

var img = document.getElementById('index_img');
var nav_img = document.getElementById('nav_right_img');
var nav_height = $('nav').outerHeight();
nav_img.children[0].style.height = nav_height + 'px';
nav_height += 10;

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

console.log(nav_height);
