/*Function for the main page image selector*/
var imageCounter = 1;
counter(imageCounter);

function currentSlide(n) {
    counter(imageCounter = n);
}
function counter(n){
    var i;
    const imageSlides = document.getElementsByClassName("lightbox-images-front");
    const imageSelect = document.getElementsByClassName("image-selector-front");
   
    if(n > imageSlides.length){
        imageCounter = 1;
    }
    if(n < 1){
        imageCounter = imageSlides.length;
    }
    for(i = 0; i < imageSlides.length; i++){
        imageSlides[i].style.display = "none";
    }
    for (i = 0; i < imageSelect.length; i++) {
        imageSelect[i].className = imageSelect[i].className.replace(" active", "");
    }
    imageSelect[imageCounter-1].className += " active"; 
    imageSlides[imageCounter-1].style.display = "flex";
 } 
 function imageSliderFront(n) {
    counter(imageCounter += n);
}

/*Open the lightbox content*/
function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
}
/*Close the lightbox content*/
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

 /*Function for the lightbox image selector*/
var imageCounterBack = 1;
counterBack(imageCounterBack);

function currentSlideBack(n) {
    counterBack(imageCounterBack = n);
}
function counterBack(n){
    var i;
    const imageSlidesBack = document.getElementsByClassName("lightbox-images-back");
    const imageSelectBack = document.getElementsByClassName("image-selector-back");

    if(n > imageSlidesBack.length){
        imageCounterBack = 1;
    }
    if(n < 1){
        imageCounterBack = imageSlidesBack.length;
    }
    for(i = 0; i < imageSlidesBack.length; i++){
        imageSlidesBack[i].style.display = "none";
    }
    for (i = 0; i < imageSelectBack.length; i++) {
        imageSelectBack[i].className = imageSelectBack[i].className.replace(" active", "");
    }
    imageSelectBack[imageCounterBack-1].className += " active"; 
    imageSlidesBack[imageCounterBack-1].style.display = "flex";
 } 
// Next and previous button
function imageSlider(n) {
    counterBack(imageCounterBack += n);
}


