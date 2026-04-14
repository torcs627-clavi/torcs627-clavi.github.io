// Smooth active nav link highlight on scroll
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
        });
        const activeLink = document.querySelector(
          '.nav-links a[href="#' + entry.target.id + '"]'
        );
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((section) => observer.observe(section));
