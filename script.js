// Mobile Homepage Script
// Handles hamburger menu and scroll behavior

document.addEventListener('DOMContentLoaded', function() {
  
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  
  // Hamburger menu toggle
  if (hamburger && nav) {
    hamburger.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      // Toggle aria attributes
      this.setAttribute('aria-expanded', !isExpanded);
      nav.setAttribute('aria-hidden', isExpanded);
      
      // Prevent body scroll when menu is open
      if (!isExpanded) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
    
    // Close menu when clicking nav links
    const navLinks = nav.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.setAttribute('aria-expanded', 'false');
        nav.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        if (nav.getAttribute('aria-hidden') === 'false') {
          hamburger.setAttribute('aria-expanded', 'false');
          nav.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = '';
        }
      }
    });
  }
  
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href.startsWith('#')) {
        e.preventDefault();
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = targetElement.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Prevent horizontal scrolling
  // Ensure window never scrolls horizontally
  let lastScrollLeft = 0;
  window.addEventListener('scroll', function() {
    if (window.scrollX !== 0) {
      window.scrollTo(0, window.scrollY);
    }
  }, { passive: true });
  
  // Touch event handling for horizontal scroll in carousel only
  const portfolioScroll = document.querySelector('.portfolio__scroll');
  if (portfolioScroll) {
    let isDown = false;
    let startX;
    let scrollLeft;
    
    portfolioScroll.addEventListener('mousedown', function(e) {
      isDown = true;
      portfolioScroll.style.cursor = 'grabbing';
      startX = e.pageX - portfolioScroll.offsetLeft;
      scrollLeft = portfolioScroll.scrollLeft;
    });
    
    portfolioScroll.addEventListener('mouseleave', function() {
      isDown = false;
      portfolioScroll.style.cursor = 'grab';
    });
    
    portfolioScroll.addEventListener('mouseup', function() {
      isDown = false;
      portfolioScroll.style.cursor = 'grab';
    });
    
    portfolioScroll.addEventListener('mousemove', function(e) {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - portfolioScroll.offsetLeft;
      const walk = (x - startX) * 2;
      portfolioScroll.scrollLeft = scrollLeft - walk;
    });
  }
  
  // Keyboard navigation for hamburger
  if (hamburger) {
    hamburger.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  }
});

