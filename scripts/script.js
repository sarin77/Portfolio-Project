
// HAMBURGER MENU: Improved for mobile/desktop
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-items');

function closeNavOnLinkClick() {
  // Close nav on mobile when a link is clicked
  if (window.innerWidth <= 900 && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
  }
}

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  // Close nav when a nav link is clicked (mobile UX)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNavOnLinkClick);
  });
  // Responsive: Remove mobile nav state on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      navLinks.classList.remove('active');
    }
  });
}


// EXPERIENCES TAB MANAGER.

let exps = [["exp-1", "exp-1-content"], ["exp-2", "exp-2-content"], ["exp-3", "exp-3-content"], ["exp-4", "exp-4-content"], ["exp-5", "exp-5-content"]];

function showExp(id) {

    exps.forEach(([x, y]) => {
        if (y === id) {
            document.getElementById(x).classList.add("active");
            document.getElementById(y).style.display = "block";
        } else {
            document.getElementById(x).classList.remove("active");
            document.getElementById(y).style.display = "none";
        }
    })
}

// AWARDS TAB MANAGER.

let awards = [["awards-1", "awards-1-content"], ["awards-2", "awards-2-content"], ["awards-3", "awards-3-content"], ["awards-4", "awards-4-content"], ["awards-5", "awards-5-content"]];

function showAwards(id) {
    awards.forEach(([x, y]) => {
        if (y === id) {
            document.getElementById(x).classList.add("active");
            document.getElementById(y).style.display = "block";
        } else {
            document.getElementById(x).classList.remove("active");
            document.getElementById(y).style.display = "none";
        }
    })
}

// Slide-in effect for skills blockquote in about section
window.addEventListener('DOMContentLoaded', function() {
  const aboutDesc = document.querySelector('.about-description');
  if (!aboutDesc) return;
  function onScroll() {
    const rect = aboutDesc.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      aboutDesc.classList.add('blockquote-visible');
      window.removeEventListener('scroll', onScroll);
    }
  }
  window.addEventListener('scroll', onScroll);
  onScroll();
});
