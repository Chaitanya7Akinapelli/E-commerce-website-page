let slideIndex = 1;
showSlides(slideIndex);

// Function to change slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to show the current slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to display slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let captionText = document.getElementById("caption");
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slides[slideIndex - 1].style.display = "block";  
    captionText.innerHTML = slides[slideIndex - 1].getElementsByTagName("img")[0].alt; // Use alt text as caption
}

