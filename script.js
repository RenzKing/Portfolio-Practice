//-----SCROLL SECTIONS ACTIVE LINK-----//
let menuIcon = document.querySelector(`#menu-icon`);
let navbar = document.querySelector(`.navbar`);

menuIcon.onclick = () => {
  menuIcon.classList.toggle(`bx-x`);
  navbar.classList.toggle(`active`);
};

//-----SCROLL SECTIONS ACTIVE LINK-----//
let sections = document.querySelectorAll(`section`);

let navLinks = document.querySelectorAll(`header nav a`);

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute(`id`);

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove(`active`);
        document
          .querySelector(`header nav a[href*=` + id + `]`)
          .classList.add(`active`);
      });
    }
  });
  //-----STICKY NAVBAR-----//

  let header = document.querySelector(`header`);

  header.classList.toggle(`sticky`, window.scrollY > 100);

  //----REMOVE TOGGLE ICON NAVBAR WHEN CLICK NAVBAR LINK (SCROLL)-----//

  menuIcon.classList.remove(`bx-x`);
  navbar.classList.remove(`active`);
};

//-----SCROLL REVEAL-----//
ScrollReveal({
  // reset: true,
  distance: `80px`,
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: `top` });

ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  {
    origin: `bottom`,
  }
);

ScrollReveal().reveal(
  ".home-content h1, .about-img, .portfolio-box, .contact form",
  {
    origin: `left`,
  }
);

ScrollReveal().reveal(
  ".home-content p, .about-content, .portfolio-box, .contact form",
  {
    origin: `right`,
  }
);

//-----TYPED JS-----//

const typed = new Typed(`.multiple-text`, {
  strings: [`Frontend Web Developer`],
  typeSpeed: 100,
  backSpeed: 30,
  backdelay: 1000,
  loop: true,
});

function sendMail() {
  var params = {
    name: document.getElementById("full-name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs

    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("full-name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("mobile-number").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message was sent sucessfully!");
    })

    .catch((err) => console.log(err));
}
