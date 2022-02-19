document
  .getElementById("start")
  .addEventListener(
    "click",
    () =>
      (document.getElementById(
        "game"
      ).innerHTML = `<div id="load"><div class="loading"></div></div><iframe type="text/html" src="https://game.mahjongsoul.com/index.html">`)
  );
document.addEventListener(
  "keydown",
  (e) => {
    if (e.code === "F11")
      document.querySelector("#game iframe")?.requestFullscreen();
  },
  false
);
