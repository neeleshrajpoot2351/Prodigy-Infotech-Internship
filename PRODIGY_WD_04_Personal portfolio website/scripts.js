// JavaScript for smooth scrolling

// Select all links with hashes
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();

  const targetId = this.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);

  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: 'smooth'
  });
}

// JavaScript for form validation
const form = document.querySelector('#contact form');
form.addEventListener('submit', validateForm);

function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
  }

  alert('Message sent successfully!');
  form.reset();
}
