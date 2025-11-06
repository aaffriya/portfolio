// Theme toggle, current year, and small scroll animation
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const stored = localStorage.getItem('theme');
  if (stored === 'light') root.setAttribute('data-theme', 'light');

  toggle?.addEventListener('click', () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    // Check for prefers-reduced-motion before applying theme transition animation
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      root.classList.add('theme-transition');
      setTimeout(() => {
        root.classList.remove('theme-transition');
      }, 300); // Adjust duration as needed
    }
    root.setAttribute('data-theme', isLight ? 'dark' : 'light');
    localStorage.setItem('theme', isLight ? 'dark' : 'light');
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.card, .project, .timeline-item, .contact').forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
})();
