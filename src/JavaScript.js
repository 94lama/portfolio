var acc = document.getElementsByClassName("work");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var textBtn = this.nextElementSibling;
    if (textBtn.style.display === "block") {
        textBtn.style.display = "none";
    } else {
        textBtn.style.display = "block";
    }
  });
}