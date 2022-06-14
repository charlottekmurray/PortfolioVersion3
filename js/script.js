toTop = document.getElementById("toTop");

window.onscroll = function() {scrollUp()};

function scrollUp() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

function goToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
} 

// Get Elements
const menuButton = document.querySelector('a.toggle-nav');
const mainContent = document.querySelector('main');

// Listen for clicks on `menuButton`
menuButton.addEventListener('click', function () {
  // Toggle classes on `mainContent`
  mainContent.classList.toggle('open');

  // If opened, change change text
  if (mainContent.classList.contains('open')) {
    
    menuButton.innerHTML = `<img src="fonts/close.svg" />`

  } else {
    
    menuButton.innerHTML = `<img src="fonts/menu.svg" />`
  } 
  
});

window.onload=function()

{

setTimeout(func1, 2000);

};

function func1()

{

document.getElementById("DC").style.display = "block";

}

