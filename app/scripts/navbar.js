/**
 * Created by huangwx on 16-10-30.
 */

// $("li").hover(function () {
//   $(this).addClass('nav_hover');
// }, function () {
//   $(this).removeClass('nav_hover');
// });

var nav_img = document.getElementById('nav_right_img');
var nav_height = $('nav').outerHeight();
nav_img.children[0].style.height = nav_height + 'px';
