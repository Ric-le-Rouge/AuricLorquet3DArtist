// Image Slider

const slides = document.querySelectorAll(".slide");
const videos = document.querySelectorAll(".slide video");
let slideIndex = 0;
let intervalId = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){

    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 11000);
    }

    playActiveVideo();

}

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");

    playActiveVideo();

}

function prevSlide(){

    clearInterval(intervalId)
    slideIndex--;
    showSlide(slideIndex);

}

function nextSlide(){
    
    slideIndex++;
    showSlide(slideIndex);

}

function playActiveVideo() {

    slides.forEach(slide => {

        if (slide.classList.contains("displaySlide")) {
            videos.forEach(video => video.pause());
            const activeSlide = document.querySelector(".slide.displaySlide");

            if (activeSlide) {
                const video = activeSlide.querySelector("video");
                if (video) {
                    video.currentTime = 0;
                    video.play();
                }
            }
        }
    });

}

// Animate in view

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
		  return;
		}
		entry.target.classList.remove('in-view');
	  });
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.animate');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

});

// Image full view

function FullViewImage(ImgLink) {
    document.getElementById("FullImage").src = ImgLink;
    document.getElementById("FullImageView").style.display = "block";

    document.getElementById("FullImage").style.display = "inline";
    document.getElementById("FullVideo").style.display = "none";
}

function FullViewVideo(ImgLink) {
    document.getElementById("FullVideo").src = ImgLink;
    document.getElementById("FullImageView").style.display = "block";

    document.getElementById("FullVideo").style.display = "inline";
    document.getElementById("FullImage").style.display = "none";
}

function CloseFullView() {
    document.getElementById("FullImageView").style.display = "none";
    document.getElementById("FullImage").removeAttribute('src');
    document.getElementById("FullVideo").removeAttribute('src');
}

// test

