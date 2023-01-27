const menu = document.getElementById('menu-mobile');
const menubtn = document.getElementById('menu-bar');
const closebar = document.getElementsByClassName('close')[0];

menubtn.onclick = function display() {
  menu.style.display = 'block';
};

closebar.onclick = function close() {
  menu.style.display = 'none';
};

window.onclick = function exit(event) {
  if (event.target === menu) {
    menu.style.display = 'none';
  }
};

menu.onclick = function close() {
  menu.style.display = 'none';
};