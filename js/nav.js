// ============================================
// NAVIGATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const nav       = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');
  const dropdowns = document.querySelectorAll('.has-dropdown');

  if (!nav) return;

  // --- Scroll effect ---
  const handleScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);

    // Highlight active section
    let current = '';
    document.querySelectorAll('section[id]').forEach(section => {
      if (window.scrollY >= section.offsetTop - 160) current = section.getAttribute('id');
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}` && !!current);
    });
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (!navToggle || !navLinks || !navOverlay) {
    return;
  }

  // --- Mobile menu ---
  const menuItems = navLinks.querySelectorAll('li');

  const closeMenu = () => {
    navLinks.classList.remove('active');
    navToggle.classList.remove('active');
    navOverlay.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    
    // NEW: Close all dropdowns when the main menu closes
    dropdowns.forEach(dd => {
      dd.classList.remove('open');
      const t = dd.querySelector('.dropdown-trigger');
      if (t) t.setAttribute('aria-expanded', 'false');
    });
    document.body.style.overflow = '';
    navToggle.setAttribute('aria-label', 'Abrir menú');

    // Reset animations so they replay on next open
    menuItems.forEach(li => {
      li.style.animation = 'none';
      // Force reflow
      void li.offsetWidth;
      li.style.animation = '';
    });
  };

  const openMenu = () => {
    // Reset animations before adding class so they trigger fresh
    menuItems.forEach(li => {
      li.style.animation = 'none';
      void li.offsetWidth;
      li.style.animation = '';
    });

    navLinks.classList.add('active');
    navToggle.classList.add('active');
    navOverlay.classList.add('active');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Cerrar menú');
    document.body.style.overflow = 'hidden';
  };

  navToggle.addEventListener('click', () => {
    navLinks.classList.contains('active') ? closeMenu() : openMenu();
  });

  navOverlay.addEventListener('click', closeMenu);

  // ---- Manejo de enlaces y Dropdowns ----
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      const isDropdownTrigger = link.classList.contains('dropdown-trigger');
      const isMobile = window.innerWidth <= 900;
      const href = link.getAttribute('href');

      // Lógica específica para dropdowns en móvil
      if (isDropdownTrigger && isMobile) {
        const dd = link.closest('.has-dropdown');
        const isOpen = dd.classList.contains('open');

        if (!isOpen) {
          e.preventDefault(); // Evitamos navegación para abrir el submenú
          dropdowns.forEach(d => d.classList.remove('open'));
          dd.classList.add('open');
          link.setAttribute('aria-expanded', 'true');
          return;
        }
      }
      
      // Si es un enlace de anclaje (#), cerramos inmediatamente
      if (href && href.startsWith('#')) {
        closeMenu();
      } else {
        // Para enlaces a otras páginas, cerramos con un leve retraso para feedback visual
        setTimeout(closeMenu, 100);
      }
    });
  });

  // Soporte de teclado para Dropdowns (Desktop)
  dropdowns.forEach(dd => {
    const trigger = dd.querySelector('.dropdown-trigger');
    if (!trigger) return;
    // Desktop: keyboard support (Enter / Space)
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const isOpen = dd.classList.contains('open');
        dropdowns.forEach(d => d.classList.remove('open'));
        if (!isOpen) {
          dd.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
        } else {
          trigger.setAttribute('aria-expanded', 'false');
        }
      }
      if (e.key === 'Escape') {
        dd.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Close menu or dropdown on outside click
  document.addEventListener('click', (e) => {
    // Mobile menu outside click
    if (navLinks.classList.contains('active') && !nav.contains(e.target)) {
      closeMenu();
    }

    // Dropdown outside click
    if (!e.target.closest('.has-dropdown')) {
      dropdowns.forEach(dd => {
        dd.classList.remove('open');
        const t = dd.querySelector('.dropdown-trigger');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Close dropdown on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      dropdowns.forEach(dd => {
        dd.classList.remove('open');
        const t = dd.querySelector('.dropdown-trigger');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
      closeMenu();
    }
  });
});
