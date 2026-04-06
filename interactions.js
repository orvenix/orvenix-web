// ============================================
// INTERACTIONS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Theme Toggle ----
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
    }

    themeToggle.addEventListener('click', () => {
      themeToggle.classList.add('is-animating');
      setTimeout(() => themeToggle.classList.remove('is-animating'), 600);
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
  }

  // ---- Preloader ----
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.style.overflow = '';
      }, 600);
    });
  }

  // ---- FAQ Accordion ----
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      const isOpen = !!answer.style.maxHeight;

      // Close all
      document.querySelectorAll('.faq-answer').forEach(a => { a.style.maxHeight = null; });
      document.querySelectorAll('.faq-icon').forEach(i => { i.textContent = '+'; });
      document.querySelectorAll('.faq-question').forEach(b => { b.setAttribute('aria-expanded', 'false'); });

      // Open clicked (if it was closed)
      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.textContent = '−';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ---- Contact Form ----
  const contactForm = document.getElementById('contactForm');
  const formResponse = document.getElementById('formResponse');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!contactForm.checkValidity()) {
        formResponse.textContent = 'Por favor, rellena todos los campos obligatorios correctamente.';
        formResponse.className = 'form-response error';
        return;
      }

      const btn = contactForm.querySelector('button[type="submit"]');
      const btnSpan = btn.querySelector('span');

      btn.classList.add('btn-loading');
      btn.disabled = true;

      fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      })
      .then(response => {
        if (response.ok) {
          btn.classList.remove('btn-loading');
          btn.classList.add('btn-success');
          if (btnSpan) btnSpan.textContent = '¡Mensaje Enviado! ✓';

          if (typeof confetti === 'function') {
            confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#00c8d4', '#3b82f6', '#2dd4bf'] });
          }

          // Fade out form elements
          const elements = Array.from(contactForm.children).filter(el => el !== formResponse);
          elements.forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = '0';
              el.style.transform = 'translateY(-8px)';
              el.style.transition = 'all 0.35s ease';
            }, i * 50);
          });

          setTimeout(() => {
            elements.forEach(el => { el.style.display = 'none'; });
            formResponse.textContent = '¡Gracias! Hemos recibido tu propuesta. Te contactaremos en menos de 24 horas.';
            formResponse.className = 'form-response success';
            contactForm.reset();
          }, 600);

        } else {
          throw new Error('Server error');
        }
      })
      .catch(() => {
        btn.classList.remove('btn-loading');
        btn.disabled = false;
        formResponse.textContent = 'Hubo un error al enviar. Por favor, intenta de nuevo.';
        formResponse.className = 'form-response error';
      });
    });
  }

  // ---- Scroll Progress & Back to Top ----
  const scrollProgress = document.getElementById('scrollProgress');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
    if (scrollProgress) scrollProgress.style.width = `${progress}%`;
    if (backToTop) backToTop.classList.toggle('show', window.scrollY > 500);
  }, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = 90;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ---- Mouse glow + card spotlight (LERP) ----
  const serviceCards = document.querySelectorAll('.service-card');
  const globalGlow = document.getElementById('globalGlow');
  let mouse = { x: 0, y: 0 };
  let glow  = { x: 0, y: 0 };

  document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function updateRender() {
    glow.x += (mouse.x - glow.x) * 0.12;
    glow.y += (mouse.y - glow.y) * 0.12;

    if (globalGlow) {
      globalGlow.style.setProperty('--global-x', `${glow.x}px`);
      globalGlow.style.setProperty('--global-y', `${glow.y}px`);
    }

    serviceCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (mouse.x > rect.left - 120 && mouse.x < rect.right + 120 &&
          mouse.y > rect.top - 120 && mouse.y < rect.bottom + 120) {
        card.style.setProperty('--mouse-x', `${mouse.x - rect.left}px`);
        card.style.setProperty('--mouse-y', `${mouse.y - rect.top}px`);
      }
    });

    requestAnimationFrame(updateRender);
  }
  requestAnimationFrame(updateRender);

  // ---- File input label update ----
  const fileInput = document.getElementById('archivo');
  const fileCustom = document.querySelector('.file-custom-input');
  if (fileInput && fileCustom) {
    fileInput.addEventListener('change', () => {
      fileCustom.textContent = fileInput.files.length
        ? `📎 ${fileInput.files[0].name}`
        : '📎 Seleccionar archivo...';
    });
  }

  // ---- Automatic Copyright Year ----
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
