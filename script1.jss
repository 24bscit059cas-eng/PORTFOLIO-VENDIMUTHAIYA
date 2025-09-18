// Simple form submission alert
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! Your message has been submitted.');
  this.reset(); // Reset the form
});

