const options = document.getElementById("options");
const option = options.querySelectorAll(".option>*");
const gameEl = document.getElementById("game");

document.getElementById("start").addEventListener("click", () => {
  gameEl.classList.add("playing");
  gameEl.innerHTML = `<div id="load"><div class="loading"></div></div><iframe class="gameIng" type="text/html" src="https://game.mahjongsoul.com/index.html">`;
});
document.addEventListener(
  "keydown",
  (e) => {
    if (e.code === "F11")
      document.querySelector("#game iframe")?.requestFullscreen();
  },
  false
);

option.forEach((el) =>
  el.addEventListener("click", (el) => {
    options.querySelector(".this").innerHTML = el.target.innerHTML;
    option.forEach((el) => el.classList.remove("active"));
    el.target.classList.add("active");
  })
);
options.addEventListener("click", () =>
  options.classList.toggle("show-options")
);
