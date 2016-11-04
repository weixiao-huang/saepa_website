
var img = document.getElementById('index_img');
var nav_height = $('nav').outerHeight();


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
