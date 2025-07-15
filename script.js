// Mobile Navigation Toggle
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.getElementById("nav-menu");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 70; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Car filtering functionality
const filterButtons = document.querySelectorAll(".filter-btn");
const carCards = document.querySelectorAll(".car-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    carCards.forEach((card) => {
      if (filterValue === "all") {
        card.style.display = "block";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        }, 10);
      } else {
        const cardCategory = card.getAttribute("data-category");
        if (cardCategory === filterValue) {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 10);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.8)";
          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }
      }
    });
  });
});

// Contact form handling
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(this);
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  // Show loading state
  const submitButton = this.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.innerHTML = '<span class="loading"></span> Sending...';
  submitButton.disabled = true;

  // Simulate form submission (replace with actual form handling)
  setTimeout(() => {
    // Reset form
    this.reset();

    // Show success message
    submitButton.textContent = "Message Sent!";
    submitButton.style.background = "#27ae60";

    // Reset button after 3 seconds
    setTimeout(() => {
      submitButton.textContent = originalText;
      submitButton.style.background = "";
      submitButton.disabled = false;
    }, 3000);

    // You can add actual form submission logic here
    console.log("Form submitted:", formObject);
  }, 2000);
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Add animation classes and observe elements
document.addEventListener("DOMContentLoaded", () => {
  // Animate section headers
  document.querySelectorAll(".section-header").forEach((header) => {
    header.classList.add("fade-in");
    observer.observe(header);
  });

  // Animate car cards
  document.querySelectorAll(".car-card").forEach((card, index) => {
    card.classList.add("fade-in");
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });

  // Animate service cards
  document.querySelectorAll(".service-card").forEach((card, index) => {
    card.classList.add("fade-in");
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });

  // Animate about section
  const aboutText = document.querySelector(".about-text");
  const aboutImage = document.querySelector(".about-image");

  if (aboutText) {
    aboutText.classList.add("slide-in-left");
    observer.observe(aboutText);
  }

  if (aboutImage) {
    aboutImage.classList.add("slide-in-right");
    observer.observe(aboutImage);
  }

  // Animate contact items
  document.querySelectorAll(".contact-item").forEach((item, index) => {
    item.classList.add("fade-in");
    item.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(item);
  });

  // Animate contact form
  const contactFormElement = document.querySelector(".contact-form");
  if (contactFormElement) {
    contactFormElement.classList.add("slide-in-right");
    observer.observe(contactFormElement);
  }
});

// Car card hover effects
document.querySelectorAll(".car-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Add click handlers for car detail buttons
document.querySelectorAll(".car-overlay .btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.stopPropagation();
    const carCard = this.closest(".car-card");
    const carName = carCard.querySelector("h3").textContent;

    // You can implement a modal or redirect to a detail page here
    alert(
      `View details for ${carName}\n\nThis would typically open a detailed view or modal with more information about the vehicle.`
    );
  });
});

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector(".hero-image img");

  if (heroImage) {
    const rate = scrolled * -0.5;
    heroImage.style.transform = `translateY(${rate}px)`;
  }
});

// Add loading animation to buttons
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function () {
    if (!this.classList.contains("loading-btn")) {
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);
    }
  });
});

// Statistics counter animation
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent =
        target +
        (element.textContent.includes("+") ? "+" : "") +
        (element.textContent.includes("%") ? "%" : "");
      clearInterval(timer);
    } else {
      element.textContent =
        Math.floor(start) +
        (element.textContent.includes("+") ? "+" : "") +
        (element.textContent.includes("%") ? "%" : "");
    }
  }, 16);
}

// Animate statistics when they come into view
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumber = entry.target.querySelector("h3");
        const text = statNumber.textContent;
        const number = parseInt(text.replace(/\D/g, ""));

        statNumber.textContent =
          "0" +
          (text.includes("+") ? "+" : "") +
          (text.includes("%") ? "%" : "");

        animateCounter(statNumber, number);
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".stat").forEach((stat) => {
  statsObserver.observe(stat);
});

// Add smooth reveal animation for elements
function revealOnScroll() {
  const reveals = document.querySelectorAll(
    ".fade-in, .slide-in-left, .slide-in-right"
  );

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Initialize reveal on page load
document.addEventListener("DOMContentLoaded", revealOnScroll);

// Add keyboard navigation support
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // Close mobile menu if open
    mobileMenu.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// Add focus management for accessibility
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("focus", () => {
    link.style.outline = "2px solid #e74c3c";
    link.style.outlineOffset = "2px";
  });

  link.addEventListener("blur", () => {
    link.style.outline = "";
    link.style.outlineOffset = "";
  });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}, 10);

window.addEventListener("scroll", debouncedScrollHandler);
