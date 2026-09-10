// =========================================================
// BABY SOOGA & FRIENDS — WEBSITE JAVASCRIPT
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

  // Smooth navigation
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Small welcome effect
  const heroTitle = document.querySelector(".hero h1");

  if (heroTitle) {
    heroTitle.style.opacity = "0";
    heroTitle.style.transform = "translateY(20px)";

    setTimeout(() => {
      heroTitle.style.transition = "all 0.8s ease";
      heroTitle.style.opacity = "1";
      heroTitle.style.transform = "translateY(0)";
    }, 200);
  }

  // Character card entrance animation
  const cards = document.querySelectorAll(".character-card");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);
  });

});
