function classToggle() {
  const navs = document.querySelectorAll('.navbar-nav')

  navs.forEach(nav => nav.classList.toggle('show'));
};