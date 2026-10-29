(() => {
  'use strict';
  const translations = window.DIDMailTranslations || {};
  const supported = ['en', 'zh', 'ja', 'ru', 'ar'];
  const englishUI = {
    _title: 'DIDMail — Private by key. Personal by design.',
    _description: 'DIDMail: private-key identity, end-to-end encrypted email, NFT envelopes and namecards. Built on ArcBlock technology and ARC.',
    _language: 'Website language', _nav: 'Main navigation', _menu: 'Toggle navigation',
    _scene: 'Concept illustration of an encrypted NFT envelope', _home: 'DIDMail home'
  };
  const elements = [...document.querySelectorAll('[data-i18n]')];
  const original = new Map(elements.map(el => [el, el.innerHTML]));
  const languageSelect = document.querySelector('.language');
  const menuButton = document.querySelector('.menu-button');
  const navigation = document.getElementById('navigation');
  const normalize = value => {
    const code = String(value || '').toLowerCase().split(/[-_]/)[0];
    return supported.includes(code) ? code : null;
  };
  function setLanguage(next) {
    const requestedLanguage = normalize(next) || 'en';
    const language = requestedLanguage === 'en' || translations[requestedLanguage] ? requestedLanguage : 'en';
    const messages = language === 'en' ? englishUI : { ...englishUI, ...translations[language] };
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    for (const el of elements) {
      if (language === 'en' || !Object.hasOwn(messages, el.dataset.i18n)) el.innerHTML = original.get(el);
      else el.textContent = messages[el.dataset.i18n];
    }
    languageSelect.value = language;
    languageSelect.setAttribute('aria-label', messages._language);
    navigation.setAttribute('aria-label', messages._nav);
    menuButton.setAttribute('aria-label', messages._menu);
    document.querySelector('.mail-scene').setAttribute('aria-label', messages._scene);
    for (const home of document.querySelectorAll('a.brand')) home.setAttribute('aria-label', messages._home);
    document.title = messages._title;
    document.querySelector('meta[name="description"]').content = messages._description;
    document.querySelector('meta[property="og:title"]').content = messages._title;
    document.querySelector('meta[property="og:description"]').content = messages._description;
    try { localStorage.setItem('didmail-language', language); } catch { /* Storage is optional. */ }
  }
  function closeMenu() {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
  languageSelect.addEventListener('change', () => {
    setLanguage(languageSelect.value);
    // A selected language remains selected on reload, even on a shared ?lang= link.
    const url = new URL(location.href);
    url.searchParams.set('lang', languageSelect.value);
    try { history.replaceState(null, '', url); } catch { /* Local file previews may disallow URL changes. */ }
    closeMenu();
  });
  menuButton.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      const wasOpen = navigation.classList.contains('open');
      closeMenu();
      if (wasOpen) menuButton.focus();
    }
  });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
  let saved;
  try { saved = normalize(localStorage.getItem('didmail-language')); } catch { /* Storage is optional. */ }
  const requested = normalize(new URLSearchParams(location.search).get('lang'));
  const browserLanguage = [...(navigator.languages || []), navigator.language].map(normalize).find(Boolean);
  setLanguage(requested || saved || browserLanguage || 'en');
})();
