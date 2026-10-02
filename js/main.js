/* PitchEye – site script: mobile menu, dropdowns, demo form (mailto) */
(function () {
  'use strict';

  // Mobile menu
  var toggle = document.querySelector('.mobile-toggle');
  var menu = document.getElementById('site-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
      menu.classList.toggle('open', !open);
    });
  }

  // Dropdown groups (click / keyboard; hover handled in CSS on desktop)
  var groupBtns = document.querySelectorAll('.nav-group-btn');
  groupBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = btn.getAttribute('aria-expanded') === 'true';
      groupBtns.forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
      btn.setAttribute('aria-expanded', String(!open));
    });
  });
  document.addEventListener('click', function () {
    groupBtns.forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    groupBtns.forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
    if (toggle && toggle.getAttribute('aria-expanded') === 'true') { toggle.click(); toggle.focus(); }
  });

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Demo request form -> opens the visitor's email app with a pre-filled message
  var form = document.getElementById('demo-form');
  if (form) {
    var status = document.getElementById('form-status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var required = form.querySelectorAll('[required]');
      var firstBad = null;
      required.forEach(function (f) {
        var bad = !f.value.trim() || (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value));
        f.classList.toggle('invalid', bad);
        f.setAttribute('aria-invalid', String(bad));
        if (bad && !firstBad) firstBad = f;
      });
      if (firstBad) {
        status.className = 'form-note error';
        status.textContent = 'Please fill in your name, company and a valid email address.';
        firstBad.focus();
        return;
      }
      var v = function (id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; };
      var subject = 'Demo request: ' + v('company') + (v('industry') ? ' (' + v('industry') + ')' : '');
      var body = [
        'Name: ' + v('name'),
        'Company: ' + v('company'),
        'Email: ' + v('email'),
        'Phone: ' + (v('phone') || '-'),
        'Industry: ' + (v('industry') || '-'),
        '',
        'Project details:',
        v('message') || '-'
      ].join('\n');
      window.location.href = 'mailto:' + form.getAttribute('data-mailto') +
        '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      status.className = 'form-note success';
      status.innerHTML = 'Your email app should open with your request ready to send. If nothing happened, email <a href="mailto:' +
        form.getAttribute('data-mailto') + '">' + form.getAttribute('data-mailto') + '</a>.';
      if (typeof window.gtag === 'function') window.gtag('event', 'generate_lead', { method: 'demo_form_mailto' });
    });
  }
})();
