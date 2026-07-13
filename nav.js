/* Tilth — shared masthead enhancer: desktop CTA + accessible mobile menu */
(function(){
  "use strict";
  var mh = document.querySelector('.masthead');
  if(!mh) return;
  var wrap = mh.querySelector('.wrap');
  var navEl = mh.querySelector('nav');
  if(!wrap || !navEl) return;

  // hide the editorial "meta" line, replace with a CTA for parity with the homepage
  var meta = mh.querySelector('.meta');
  if(meta) meta.style.display = 'none';

  // theme toggle (parity with the homepage)
  var root = document.documentElement;
  var themeBtn = document.createElement('button');
  themeBtn.className = 'theme-toggle';
  themeBtn.type = 'button';
  themeBtn.setAttribute('aria-label', 'Toggle light or dark theme');
  themeBtn.setAttribute('title', 'Toggle theme');
  themeBtn.innerHTML = '<svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg><svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  themeBtn.addEventListener('click', function(){
    var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    if(next === 'light') root.setAttribute('data-theme', 'light'); else root.removeAttribute('data-theme');
    try{ localStorage.setItem('tilth-theme', next); }catch(e){}
  });
  wrap.appendChild(themeBtn);

  var cta = document.createElement('a');
  cta.href = '/contact/';
  cta.className = 'mh-cta';
  cta.textContent = 'Free audit';
  wrap.appendChild(cta);

  // burger
  var burger = document.createElement('button');
  burger.className = 'mh-burger';
  burger.setAttribute('aria-label', 'Open menu');
  burger.setAttribute('aria-expanded', 'false');
  burger.innerHTML = '<span></span><span></span>';
  wrap.appendChild(burger);

  // full-screen overlay built from the existing nav links
  var menu = document.createElement('div');
  menu.className = 'mh-menu';
  menu.id = 'mh-menu-overlay';
  menu.setAttribute('aria-hidden', 'true');
  burger.setAttribute('aria-controls', 'mh-menu-overlay');
  navEl.querySelectorAll('a').forEach(function(a){
    var l = document.createElement('a');
    l.href = a.getAttribute('href');
    l.textContent = a.textContent;
    menu.appendChild(l);
  });
  var menuCta = document.createElement('a');
  menuCta.href = '/contact/';
  menuCta.className = 'mh-menu-cta';
  menuCta.textContent = 'Request a free audit →';
  menu.appendChild(menuCta);
  document.body.appendChild(menu);

  function set(open){
    document.body.classList.toggle('mh-open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.setAttribute('aria-hidden', open ? 'false' : 'true');
  }
  burger.addEventListener('click', function(){ set(!document.body.classList.contains('mh-open')); });
  menu.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ set(false); }); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') set(false); });

  // wrap page content in a <main> landmark
  if(!document.getElementById('main')){
    var foot = document.querySelector('footer');
    var main = document.createElement('main');
    main.id = 'main'; main.setAttribute('tabindex', '-1');
    var node = mh.nextElementSibling;
    while(node && node !== foot && node !== menu){
      var next = node.nextElementSibling;
      main.appendChild(node);
      node = next;
    }
    if(foot) foot.parentNode.insertBefore(main, foot); else document.body.appendChild(main);
  }

  // skip-to-content link (first focusable element)
  var skip = document.createElement('a');
  skip.className = 'skip-link'; skip.href = '#main'; skip.textContent = 'Skip to content';
  document.body.insertBefore(skip, document.body.firstChild);
})();
