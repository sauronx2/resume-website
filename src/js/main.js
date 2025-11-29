// Navigation active state
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Intersection Observer for active nav state
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -80% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-section') === id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Contact form handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');

      // Create mailto link as fallback
      const subject = encodeURIComponent(`Contact from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      const mailtoLink = `mailto:oleksandr.serhadov@gmail.com?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoLink;

      // Show success message
      alert('Opening your email client. Thank you for reaching out!');
    });
  }

  // Add animation on scroll
  const animateOnScroll = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 100;
      if (isVisible) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  };

  // Initial styles for animation
  document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  // Run animation check
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});
