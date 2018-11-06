var navb = document.getElementsByClassName("nav-link");

for(var i = 0; i < navb.length; i++)
{
  navb[i].addEventListener("click", function() {
    var selected = document.getElementsByClassName("active");

      if (selected.length > 0) {
        selected[0].className = selected[0].className.replace(" active", "");
      }
      this.className += " active";
    });
}
