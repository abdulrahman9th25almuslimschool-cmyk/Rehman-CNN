/* ═══════════════════════════════════════════
   PakNews — Main JavaScript
   File: script.js
═══════════════════════════════════════════ */

/**
 * Article overlay kholne ka function
 * Kisi bhi news card par click karne se ye chalega
 */
function openArticle() {
  document.getElementById('articleOverlay').classList.add('open');
  document.body.style.overflow = 'hidden'; // background scroll band
}

/**
 * Article overlay band karne ka function
 * X button par click karne se ye chalega
 */
function closeArticle() {
  document.getElementById('articleOverlay').classList.remove('open');
  document.body.style.overflow = ''; // scroll wapas enable
}

/**
 * Escape key se bhi article band ho
 */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeArticle();
  }
});

/**
 * Nav links mein active class toggle karna
 */
document.querySelectorAll('nav a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('nav a').forEach(function(a) {
      a.classList.remove('active');
    });
    this.classList.add('active');
  });
});

/**
 * Newsletter form submit
 */
var newsletterBtn = document.querySelector('.newsletter-btn');
var newsletterInput = document.querySelector('.newsletter-input');
if (newsletterBtn && newsletterInput) {
  newsletterBtn.addEventListener('click', function() {
    var email = newsletterInput.value.trim();
    if (email && email.includes('@')) {
      newsletterBtn.textContent = '✓ Subscribed!';
      newsletterBtn.style.background = '#155724';
      newsletterInput.value = '';
      setTimeout(function() {
        newsletterBtn.textContent = 'Subscribe Now';
        newsletterBtn.style.background = '';
      }, 3000);
    } else {
      newsletterInput.style.borderColor = '#c8102e';
      setTimeout(function() {
        newsletterInput.style.borderColor = '';
      }, 2000);
    }
  });
}
