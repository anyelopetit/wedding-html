function scrollingPage() {
  if (
    document.body.scrollTop > 950 ||
    document.documentElement.scrollTop > 950
  ) {
    document.getElementById("dektop-sticky-nav").classList.add("visible");
  } else {
    document.getElementById("dektop-sticky-nav").classList.remove("visible");
  }
}

function openHotel(hotelName, elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].classList.remove("active-tab");
  }
  document.getElementById(hotelName).style.display = "block";
  elmnt.classList.add("active-tab");
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openBridesMaid(brideName, elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("brideTabContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("brideTabLink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].classList.remove("active-tab");
  }
  document.getElementById(brideName).style.display = "block";
  elmnt.classList.add("active-tab");
}

function openBestMan(bestmanName, elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("bestmanTabContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("bestmanTabLink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].classList.remove("active-tab");
  }
  document.getElementById(bestmanName).style.display = "block";
  elmnt.classList.add("active-tab");
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultBestmanOpen").click();
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultBrideOpen").click();

function openModal() {
  document.getElementById("myModal").style.display = "block";
  document.body.classList.add("no-scroll");
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.body.classList.remove("no-scroll");
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("active-slide");
  /*dots[slideIndex-1].className += " active";
	/*captionText.innerHTML = dots[slideIndex-1].alt;*/
}
