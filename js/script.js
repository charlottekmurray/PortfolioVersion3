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