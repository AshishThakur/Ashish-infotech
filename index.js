document.addEventListener("DOMContentLoaded", function () {
    // --- 1. Header Scroll & Mobile Menu Logic ---
    const header = document.getElementById('header');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }

    // --- 2. Custom Cursor Logic ---
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    if (cursorDot && cursorOutline) {
        // Mouse move event
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Interactive elements par hover effect
        const interactiveElements = document.querySelectorAll('a, button, input, textarea');

        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', () => {
                document.body.classList.add('hovered');
            });
            el.addEventListener('mouseleave', () => {
                document.body.classList.remove('hovered');
            });
        });
    }

    // --- 3. Cyber Section Scroll Animation (Intersection Observer) ---
    const cyberSection = document.querySelector(".cyber-solutions-section");

    if (cyberSection) {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px', // Thoda pehle trigger hoga taaki scroll karte waqt abrupt na lage
            threshold: 0.10 
        };

        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("aos-animate");
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        observer.observe(cyberSection);
    }
});


// // Popup dikhane aur band karne ke functions
// function showSecurityPopup() {
//     const popup = document.getElementById('securityPopup');
//     if (popup) {
//         popup.classList.add('active');
//     }
// }

// function closeSecurityPopup() {
//     const popup = document.getElementById('securityPopup');
//     if (popup) {
//         popup.classList.remove('active');
//     }
// }

// 1. Right Click Disable karna aur Popup trigger karna
document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // Right click ko rok dega
    showSecurityPopup(); // Cyber popup dikhayega
});

// 2. Keyboard Shortcuts (F12, Ctrl+Shift+I, Ctrl+U, etc.) ko rokna
document.addEventListener('keydown', function (e) {
    // F12 key
    if (e.key === 'F12') {
        e.preventDefault();
        showSecurityPopup();
    }

    // Ctrl + Shift + I (Inspect)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j')) {
        e.preventDefault();
        showSecurityPopup();
    }

    // Ctrl + Shift + C (Inspect Element)
    if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) {
        e.preventDefault();
        showSecurityPopup();
    }

    // Ctrl + U (View Source)
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
        showSecurityPopup();
    }
    
    // Ctrl + S (Save Page)
    if (e.ctrlKey && (e.key === 'S' || e.key === 's')) {
        e.preventDefault();
        showSecurityPopup();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active-animation');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active-animation');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
  });
});



document.addEventListener("DOMContentLoaded", function () {
  // 1. Scroll-triggered animation observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active-animation');
        
        // Agar yeh section stats wala hai, toh counters start kar do
        if (entry.target.querySelector('.counter')) {
          startCounters();
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
  });

  // 2. Number Counter Animation Function (0 se target tak)
  function startCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Animation speed control karne ke liye

    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const suffix = counter.getAttribute('data-suffix') || '';
      let count = 0;

      const updateCount = () => {
        const increment = target / speed;
        count += increment;

        if (count < target) {
          counter.innerText = Math.ceil(count) + suffix;
          setTimeout(updateCount, 15);
        } else {
          counter.innerText = target + suffix;
        }
      };

      updateCount();
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active-animation');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
  });
});