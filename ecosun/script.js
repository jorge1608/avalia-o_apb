let slideIndex = 1;

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("demo");
	let captionText = document.getElementById("caption");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	captionText.innerHTML = dots[slideIndex-1].alt;
}

/* 37: esquerda; 39: direita */
window.addEventListener("keydown", function(e){
	e.preventDefault();
	var keyNumber;

	if(window.event) { // IE                  
		keyNumber = e.keyCode;
	} else if(e.which){ // Netscape/Firefox/Opera                 
		keyNumber = e.which;
	}

	if (keyNumber == 37) {
		plusSlides(-1);
	} else if (keyNumber == 39) {
		plusSlides(1);
	}
});