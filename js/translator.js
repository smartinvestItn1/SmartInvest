// js/translator.js
// SmartInvest Translation Engine

const rtlLanguages = ['ar', 'fa'];

function setLanguage(lang) {
  const texts = translations[lang] || translations['en'];
  
  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    const key = el.getAttribute('data-i18n');
    if (texts[key]) {
      el.textContent = texts[key];
    }
  });
  
  // Update HTML lang and dir
  document.documentElement.lang = lang;
  document.documentElement.dir = rtlLanguages.includes(lang) ? 'rtl' : 'ltr';
  
  // Save preference
  localStorage.setItem('site-language', lang);
  
  // Update selector
  const selector = document.getElementById('lang-select');
  if (selector) selector.value = lang;
}

function initLanguage() {
  const saved = localStorage.getItem('site-language');
  const browserLang = navigator.language.split('-')[0];
  const lang = saved || (translations[browserLang] ? browserLang : 'en');
  setLanguage(lang);
}

// Run when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguage);
} else {
  initLanguage();
}
