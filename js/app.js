var navb = document.getElementsByClassName("nav-link");

for(var i = 0; i < navb.length; i++)
{
  navb[i].addEventListener("click", function() {
    var selected = document.getElementsByClassName("active");

      if (selected.length > 0) {
        selected[0].className = selected[0].className.replace(" active", "");
      }
      this.className += " active";
    });
}


// var images_h = document.querySelectorAll(' .carousel .image_h');
// var currentImage_H = 0;
// var slideInterval = setInterval(nextImage_H,5000);
//
// function nextImage_H() {
//     images_h[currentImage_H].className = 'image_h ';
//     currentImage_H = (currentImage_H+1simages_h.length;
//     images_h[currentImage_H].className = 'image_h showing';
// }
//
// var images_l = document.querySelectorAll(' .carousel .image_l');
// var currentImage_L = 0;
// var slideInterval = setInterval(nextImage_L,5000);
//
// function nextImage_L() {
//     images_l[currentImage_L].className = 'image_l';
//     currentImage_L = (currentImage_L+1)%images_l.length;
//     images_l[currentImage_L].className = 'image_l showing';
// }
