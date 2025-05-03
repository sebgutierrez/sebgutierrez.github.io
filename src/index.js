var themeToggle = document.querySelector('.theme-toggle');
const header = document.querySelector('.header');

window.onload = loadTheme();

function loadTheme() {
  const localTheme = localStorage.getItem("theme");
  if(localTheme !== null && localTheme === "night-theme"){
    root.classList.remove("day-theme");
    root.classList.add(localTheme);
    themeToggle.checked = true;
  } 
  else if(localTheme !== null && localTheme === "day-theme"){
    root.classList.remove("night-theme");
    root.classList.add(localTheme);
  }
};

//helper function

function replaceTheme(a, b) {
  root.classList.remove(a);
  root.classList.add(b);
  localStorage.setItem("theme", b);
};

function changeThemes() {
  if(themeToggle.checked){
    replaceTheme("night-theme","day-theme");
  }
  else{
    replaceTheme("day-theme","night-theme");
  }
};

const nightIcon = document.getElementById('night-theme-icon');
const dayIcon = document.getElementById('day-theme-icon');
nightIcon.addEventListener('click', changeThemes);
dayIcon.addEventListener('click', changeThemes);

var openMenuSVG = document.querySelector('.open-menu-svg');
var closeMenuSVG = document.querySelector('.close-menu-svg');
var menuToggle = document.getElementById('mobile-menu-toggle');

function changeMenuToggleStyle() {
  if(menuToggle.checked){
    openMenuSVG.style.display = "none";
    closeMenuSVG.style.display = "block";
  }
  else{
    openMenuSVG.style.display = "block";
    closeMenuSVG.style.display = "none";
  }
};

menuToggle.addEventListener('click', changeMenuToggleStyle);
