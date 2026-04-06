// ============================================
// ANIMATIONS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Reveal on scroll (Intersection Observer) ----
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ---- Counter animation for stats ----
  const stats = document.querySelectorAll('.hero-stats .stat-num span[data-target]');

  const animateStats = () => {
    stats.forEach(stat => {
      const target = +stat.getAttribute('data-target');
      const suffix = stat.getAttribute('data-suffix') || '';
      let current = 0;
      const duration = 1800;
      const steps = 60;
      const increment = target / steps;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          stat.textContent = Math.ceil(current) + suffix;
          requestAnimationFrame(updateCounter);
        } else {
          stat.textContent = target + suffix;
        }
      };
      requestAnimationFrame(updateCounter);
    });
  };

  // Trigger when hero stats are in view
  const statsSection = document.querySelector('.hero-stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateStats();
        statsObserver.disconnect();
      }
    }, { threshold: 0.4 });
    statsObserver.observe(statsSection);
  }
});
