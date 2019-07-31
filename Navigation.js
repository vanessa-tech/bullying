window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > -3 || document.documentElement.scrollTop > -3) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}
