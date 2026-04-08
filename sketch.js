window.addEventListener("scroll", function () {

  let panels = document.querySelectorAll(".panel");

  panels.forEach(function(panel) {

    let position = panel.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
      panel.style.opacity = 1;
      panel.style.transform = "translateY(0)";
    }

  });

});
