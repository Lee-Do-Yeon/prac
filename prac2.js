var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} //더 큰 숫자는 1번을
  if (n < 1) {slideIndex = slides.length} //더 작은 숫자는 마지막을
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  } //모든 이미지가 안보이게
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }//모두 비활성화
  slides[slideIndex-1].style.display = "block"; //보이게
  dots[slideIndex-1].className += " active"; //활성화되게
}

var photoIndex = 1;
showPhotos(photoIndex);

// Thumbnail image controls
function currentPhoto(n) {
  showPhotos(photoIndex = n);
}

function showPhotos(n) {
  var i;
  var photos = document.getElementsByClassName("myPhoto");
  for (i = 0; i < photos.length; i++) {
      photos[i].style.display = "none";
  } //모든 이미지가 안보이게
  photoIndex++;
  if ( photoIndex > photos.length ) { photoIndex = 1 }
  photos[photoIndex-1].style.display = "block"; //보이게
  setTimeout(showPhotos, 2000);
}
