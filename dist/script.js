// header when scroll
const header = document.getElementById("main-header");
let lastScroll = 0;
window.addEventListener("scroll", () => {
  // number of pixel scroll
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll) {
    header.style.transform = "translateY(-100%)";
  } else {
    header.style.transform = "translateY(0)";
  }
  currentScroll === 0
    ? (header.style.backgroundColor = "transparent")
    : (header.style.backgroundColor = "#333");
  lastScroll = currentScroll;
});
//
//
//
//
// menu-btn navbar
const menu_btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const hello = document.getElementsByClassName("hello");

menu_btn.onclick = () => menu.classList.toggle("hidden");

//

//
// project name
let project_name = document.getElementById("project_name");
// open project name
function openProjectName() {
  project_name.style.cssText = `
    display: block;
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    overflow-y: auto;
    `;
}
// close project name
function closeProjectName(event) {
  event.preventDefault();
  project_name.style.display = "none";
}
//
//
//
//
// open bg_black
let bg_black = document.getElementById("bg_black");
function openbg_black() {
  bg_black.style.cssText = `
        display: block;
        background-color: rgba(0,0,0,0.7);
        position: fixed;
        top: 0;
        left: 0;
    `;
}
// close bg_black
function closebg_black(event) {
  event.preventDefault();
  bg_black.style.display = "none";
}
//
//
//
//
// slides
let currentIndex = 0;
let slider = document.getElementById("slider");
let numof_ph = document.getElementById("numof_ph");
const slides = document.querySelector(".slides");
const totalSlides = slides.children.length;

function showSlide(i) {
  slides.style.transform = `translateX(${-i * 100}%)`;
  numof_ph.innerHTML = currentIndex + 1;
}
// next slide
function nextSlide() {
  currentIndex = (currentIndex + 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}
// prev slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// open slides
function openSlides(i) {
  currentIndex = i - 1;
  numof_ph.innerHTML = i;
  slides.style.transform = `translateX(${-(i - 1) * 100}%)`;
  slider.style.cssText = `
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7); 
    `;
}
// close slides
function closeSlides(event) {
  event.preventDefault();
  slider.style.display = "none";
}

//
//
//
//
//
// All Graphic Web Branding
let all = document.getElementsByClassName("all");
let graphic = document.getElementsByClassName("graphic");
let web = document.getElementsByClassName("web");
let branding = document.getElementsByClassName("branding");
function filterItems(category) {
  const items = document.querySelectorAll(".item");
  (category) => {
    if (category === "all") {
      all.classlist.add("active");
      graphic.classlist.remove("active");
      web.classlist.remove("active");
      branding.classlist.remove("active");
    } else if (category === "graphic") {
      all.classlist.remove("active");
      graphic.classlist.add("active");
      web.classlist.remove("active");
      branding.classlist.remove("active");
    } else if (category === "web") {
      all.classlist.remove("active");
      graphic.classlist.remove("active");
      web.classlist.add("active");
      branding.classlist.remove("active");
    } else if (category === "branding") {
      all.classlist.remove("active");
      graphic.classlist.remove("active");
      web.classlist.remove("active");
      branding.classlist.add("active");
    }
  };

  items.forEach((item) => {
    const index = parseInt(item.getAttribute("data-category"));
    if (category === "all") {
      item.style.display = "inline-block";
    } else if (category === "graphic") {
      item.style.display = index != 1 ? "inline-block" : "none";
    } else if (category === "web") {
      item.style.display = [1, 4, 5].includes(index) ? "inline-block" : "none";
    } else if (category === "branding") {
      item.style.display = [2, 6].includes(index) ? "inline-block" : "none";
    }
  });
}
//
//
//
//
//
// random digit
let rndnumber1 = document.getElementById("rndnumber1"); //200
let rndnumber2 = document.getElementById("rndnumber2"); //345
let rndnumber3 = document.getElementById("rndnumber3"); //1800
let rndnumber4 = document.getElementById("rndnumber4"); //1200

rndnumber1.innerHTML = 200;
rndnumber2.innerHTML = 345;
rndnumber3.innerHTML = 1800;
rndnumber4.innerHTML = 1200;
function getRndInteger() {
  rndnumber1.innerHTML = Math.floor(Math.random() * 201);
  rndnumber2.innerHTML = Math.floor(Math.random() * 346);
  rndnumber3.innerHTML = Math.floor(Math.random() * 1801);
  rndnumber4.innerHTML = Math.floor(Math.random() * 1201);
}

window.onload = () => {
  getRndInteger();
};
window.addEventListener(scroll, getRndInteger());

//
//
//
//
//
// slidesWrapper
const slidesWrapper = document.querySelector(".slidesWrapper");
const dots = document.querySelectorAll(".dot");
// let slideIndex = 0;

function updateSlide(index) {
  // slidesWrapper.style.transform = `translateX(-${index * 300}px)`;
  const slideWidth = slidesWrapper.querySelector(".slide").offsetWidth;
  slidesWrapper.style.transform = `translateX(-${index * slideWidth}px)`;
  dots.forEach((dot, i) => {
    dot.classList.remove("w-6", "bg-[#ff305b]");
    dot.classList.add("w-2.5", "border", "border-[#ff305b]");
    if (i === index) {
      dot.classList.add("w-6", "bg-[#ff305b]");
      dot.classList.remove("border");
    }
  });
}

function goToSlide(index) {
  // slideIndex = index;
  updateSlide(index);
}

updateSlide(0);
//
//
//
//
//

//
//
// contact us --> valid data

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
const send = document.getElementById("send");

// if input = ""
const fields = ["name", "email", "subject", "message"];
fields.forEach((field) => {
  const input = document.getElementById(field);
  const error = document.getElementById(`${field}-error`);

  input.addEventListener("blur", () => {
    if (input.value.trim() === "") {
      error.classList.remove("hidden");
    } else {
      error.classList.add("hidden");
    }
  });
});

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// valid form
function validForm() {
  const name = nameInput.value;
  const email = emailInput.value;
  const subject = subjectInput.value;
  const message = messageInput.value;
  if (
    name !== "" &&
    emailPattern.test(email) &&
    subject !== "" &&
    message !== ""
  ) {
    send.style.cursor = "pointer";
    send.classList.remove("cursor-not-allowed");
  } else {
    send.style.cursor = "not-allowed";
    send.classList.add("cursor-not-allowed");
  }
}

nameInput.addEventListener("input", validForm);
emailInput.addEventListener("input", validForm);
subjectInput.addEventListener("input", validForm);
messageInput.addEventListener("input", validForm);

// send click
send.onclick = (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const subject = subjectInput.value;
  const message = messageInput.value;

  if (name === "" || email === "" || subject === "" || message === "") {
    // alert("Please fill all in field. ");
    // alertify.error("Please fill all in field. ");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill in all fields.",
    });

    return;
  }

  // alert error if email is not valid
  if (!emailPattern.test(email)) {
    alertify.error("Invalid email!");
    return;
  }
  // alert if everything is ok
  Swal.fire({
    icon: "success",
    title: "Message Sent!",
    html: `
    <b>Name:</b> ${name}<br/>
    <b>Email:</b> ${email}<br/>
    <b>Subject:</b> ${subject}<br/>
    <b>Message:</b> ${message}
  `,
    confirmButtonColor: "#ff305b",
  });

  nameInput.value = "";
  emailInput.value = "";
  subjectInput.value = "";
  messageInput.value = "";

  validForm();
};
