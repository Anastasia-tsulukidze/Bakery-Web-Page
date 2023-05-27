const navBurger = document.querySelector(".burger");
const navLinks = document.querySelector(".mid-nav");
const navigationBurger = document.getElementById("nav-burger");
const htmlElement = document.querySelector("html");

function navActiveToggler() {
  navLinks.classList.toggle("mid-nav__active");
}

navBurger.addEventListener("click", navActiveToggler);

function navBarActiveHandler() {
  document.documentElement.scrollTop = 0;
  htmlElement.classList.toggle("overflow-h");
  navigationBurger.classList.toggle("burger__active");
}

navBurger.addEventListener("click", navBarActiveHandler);

document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel--item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel--button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
  <div class="carousel--nav">
${buttonsHtml.join("")}
  </div>
  `
  );
  const buttons = carousel.querySelectorAll(".carousel--button");
  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      items.forEach((item) =>
        item.classList.remove("carousel--item--selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carousel--button--selected")
      );
      items[i].classList.add("carousel--item--selected");
      button.classList.add("carousel--button--selected");
    });
  });
  // items[0].classList.add("carousel--item--selected");
  // buttons[0].classList.add("carousel--button--selected");
});
