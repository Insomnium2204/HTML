function openTab(e, tabName) {
  var i, tabcontent, tablinks;

  // get tab content
  tabcontent = document.getElementsByClassName('tab-content');

  // hide tab content
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // get buttons with class name 'tab-header'
  tablinks = document.getElementsByClassName('tab-header');

  // remove active tab
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  // show current tab content
  document.getElementById(tabName).style.display = "block";

  // set 'active' class to current button
  e.currentTarget.className += ' active';
}