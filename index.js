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

// 
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');

let particlesArray = [];
let mouse = {
    x: null,
    y: null,
    radius: 150 // Cursor ka area jahan se particles door bhagenge aur connect honge
};

// Canvas Resize function
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Track Mouse Movement across window
window.addEventListener('mousemove', function(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

window.addEventListener('mouseout', function() {
    mouse.x = undefined;
    mouse.y = undefined;
});

// Particle Class Setup
class Particle {
    constructor(x, y, size, color, baseSpeedX, baseSpeedY) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = size;
        this.color = color;
        this.baseSpeedX = baseSpeedX;
        this.baseSpeedY = baseSpeedY;
        this.density = (Math.random() * 25) + 5;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    update() {
        // Floating movement
        this.baseX += this.baseSpeedX;
        this.baseY += this.baseSpeedY;

        // Screen boundaries check
        if (this.baseX < 0 || this.baseX > canvas.width) this.baseSpeedX *= -1;
        if (this.baseY < 0 || this.baseY > canvas.height) this.baseSpeedY *= -1;

        // Mouse Repulsion Logic (Cursor se dur hatna)
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (mouse.x !== undefined && distance < mouse.radius) {
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let maxDistance = mouse.radius;
            let force = (maxDistance - distance) / maxDistance;
            let directionX = forceDirectionX * force * this.density;
            let directionY = forceDirectionY * force * this.density;

            this.x -= directionX;
            this.y -= directionY;
        } else {
            // Wapas apni original jagah par ana
            if (this.x !== this.baseX) {
                let dx = this.x - this.baseX;
                this.x -= dx / 12;
            }
            if (this.y !== this.baseY) {
                let dy = this.y - this.baseY;
                this.y -= dy / 12;
            }
        }
    }
}

// Initialize Particles Grid
function initParticles() {
    particlesArray = [];
    let numberOfParticles = (canvas.width * canvas.height) / 8000;
    
    for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let size = (Math.random() * 2) + 1.2;
        let color = '#06b6d4'; // Cyber cyan color
        let speedX = (Math.random() - 0.5) * 0.6;
        let speedY = (Math.random() - 0.5) * 0.6;
        particlesArray.push(new Particle(x, y, size, color, speedX, speedY));
    }
}
initParticles();

// Connect particles with thin network lines + Direct Mouse Tech Lines
function connectParticles() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        // Particle to Particle Web Lines
        for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
                           ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            
            if (distance < (canvas.width / 10) * (canvas.height / 10)) {
                opacityValue = 1 - (distance / 14000);
                ctx.strokeStyle = `rgba(6, 182, 212, ${opacityValue * 0.18})`;
                ctx.lineWidth = 0.8;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }

        // Tech Feature: Direct Mouse-to-Particle Laser/Data Connection Lines
        if (mouse.x !== undefined) {
            let mouseDist = ((particlesArray[a].x - mouse.x) * (particlesArray[a].x - mouse.x)) +
                            ((particlesArray[a].y - mouse.y) * (particlesArray[a].y - mouse.y));
            
            if (mouseDist < 18000) { // Radius for mouse connection
                let mouseOpacity = 1 - (mouseDist / 18000);
                ctx.strokeStyle = `rgba(59, 130, 246, ${mouseOpacity * 0.4})`; // Glowing blue tech line
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
        }
    }
}

// Draw a subtle glowing tech radar circle around mouse pointer
function drawMouseRadar() {
    if (mouse.x !== undefined) {
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.15)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 60, 0, Math.PI * 2);
        ctx.stroke();
    }
}

// Animation Loop
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    connectParticles();
    drawMouseRadar();

    requestAnimationFrame(animateParticles);
}
animateParticles();

// section3 cyber solutions 
function toggleFaq(card) {
  // Optional: Agar chahte ho ki ek baar me ek hi open rahe toh niche wali line uncomment kar dena
  // document.querySelectorAll('.cyber-faq-card').forEach(item => { if(item !== card) item.classList.remove('active'); });

  card.classList.toggle('active');
}

// about us section
document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector('.expertise-section');
    if (!section) return;

    const header = section.querySelector('.expertise-header');
    const cards = section.querySelectorAll('.expertise-card');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.10
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (header) header.classList.add('active');
                cards.forEach(card => {
                    card.classList.add('active');
                });
                observerInstance.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(section);
});


document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-content-wrapper');
    
    // Pehle elements ko animation ke liye ready state mein daalo
    fadeElements.forEach(el => el.classList.add('animate-ready'));

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));
});


// our team slider 
// Scroll Animation Script
// Scroll Animation Script
function revealOnScroll() {
    var reveals = document.querySelectorAll('.services-reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', revealOnScroll);
window.onload = revealOnScroll;