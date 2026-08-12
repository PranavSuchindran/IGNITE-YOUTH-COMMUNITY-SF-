window.addEventListener('load', function() {
      const loader = document.getElementById('loader');
      setTimeout(() => {
        loader.classList.add('hidden');
      }, 2000);
    });

    // ===== HAMBURGER =====
// ===== HAMBURGER MENU =====
// ===== HAMBURGER MENU =====
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (navLinks.classList.contains('active')) {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
          navLinks.classList.remove('active');
          hamburger.classList.remove('active');
          document.body.classList.remove('menu-open');
        }
      }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
  }
});