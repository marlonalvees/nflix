const accordion = document.querySelectorAll(".js-accordion");

accordion.forEach((accord) => {
  accord.addEventListener("click", () => {
    let pai = accord.parentElement;
    pai.classList.toggle("active");
  });
});


