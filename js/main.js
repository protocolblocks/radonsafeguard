document.addEventListener('DOMContentLoaded', () => {
  // If user is logged in, send them to the private customers page (the logged-in starting page)
  // (this ensures original public nav only shows when not logged in)
  if (localStorage.getItem('radonLoggedIn') === 'true' && 
      !window.location.pathname.includes('customers.html') && 
      !window.location.pathname.includes('estimates.html') &&
      !window.location.pathname.includes('invoices.html') &&
      !window.location.pathname.includes('reports.html')) {
    window.location.href = 'customers.html';
    return;
  }
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navMobile = document.querySelector('.nav-mobile');
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.querySelector('.form-success');

  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  if (menuToggle && navMobile) {
    menuToggle.addEventListener('click', () => {
      navMobile.classList.toggle('open');
      menuToggle.classList.toggle('active');
    });

    navMobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMobile.classList.remove('open');
        menuToggle.classList.remove('active');
      });
    });
  }

  const fadeElements = document.querySelectorAll('.fade-in');
  if (fadeElements.length) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    fadeElements.forEach(el => observer.observe(el));
  }

  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      if (formSuccess) {
        formSuccess.classList.add('show');
        contactForm.reset();
        setTimeout(() => formSuccess.classList.remove('show'), 5000);
      }
    });
  }

  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      item.closest('.faq-list')?.querySelectorAll('.faq-item.open').forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('open', !isOpen);
      button.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  document.querySelectorAll('.faq-category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      document.querySelectorAll('.faq-category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.querySelectorAll('.faq-group').forEach(group => {
        group.style.display = category === 'all' || group.dataset.category === category ? '' : 'none';
      });
    });
  });

  // Login modal functionality (demo only) - only relevant on public pages
  const loginBtns = document.querySelectorAll('.login-btn');
  const loginModal = document.getElementById('login-modal');

  if (loginBtns.length && loginModal) {
    loginBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'block';
        // close mobile nav if open
        if (navMobile) navMobile.classList.remove('open');
        if (menuToggle) menuToggle.classList.remove('active');
      });
    });

    // Close modal
    const closeBtn = loginModal.querySelector('.close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
      });
    }

    // Close when clicking outside the modal content
    loginModal.addEventListener('click', (e) => {
      if (e.target === loginModal) {
        loginModal.style.display = 'none';
      }
    });

    // Fake login form
    const loginForm = document.getElementById('login-form');
    const loginSuccess = loginModal.querySelector('.login-success');

    if (loginForm && loginSuccess) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        loginSuccess.style.display = 'block';

        // Mark as logged in and send to the private customers page (the logged-in starting page)
        localStorage.setItem('radonLoggedIn', 'true');

        setTimeout(() => {
          window.location.href = 'customers.html';
        }, 800);
      });
    }
  }
});