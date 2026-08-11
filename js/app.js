(function () {
  var views = ['index', 'resume', 'cases'];

  function pad(n) { return String(n).padStart(2, '0'); }

  function setView(view) {
    if (views.indexOf(view) === -1) view = 'index';

    document.querySelectorAll('.view').forEach(function (el) {
      el.classList.toggle('active', el.id === 'view-' + view);
    });
    document.querySelectorAll('.nav-btn[data-view]').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.view === view);
    });

    window.scrollTo(0, 0);
  }

  function go(view) {
    var hash = '#' + view;
    if (window.location.hash === hash) {
      setView(view);
    } else {
      window.location.hash = hash;
    }
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-view]');
    if (!btn) return;
    e.preventDefault();
    go(btn.dataset.view);
  });

  window.addEventListener('hashchange', function () {
    setView(window.location.hash.replace('#', ''));
  });

  function tick() {
    var now = new Date();
    var clockEl = document.getElementById('clock');
    if (clockEl) {
      clockEl.textContent = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
    }
    var todayEl = document.getElementById('today');
    if (todayEl) {
      todayEl.textContent = pad(now.getMonth() + 1) + '.' + pad(now.getDate()) + '.' + now.getFullYear() + ' | PACIFIC TIME';
    }
  }

  tick();
  setInterval(tick, 1000);
  setView(window.location.hash.replace('#', '') || 'index');
})();
