const { ipcRenderer } = require("electron");

document
  .getElementById("close")
  .addEventListener("click", function closeWindow() {
    ipcRenderer.send("BrowserWindow", "close");
  });

document
  .getElementById("minimize")
  .addEventListener("click", function minimizeWindow() {
    ipcRenderer.send("BrowserWindow", "minimize");
  });

document
  .getElementById("maximize")
  .addEventListener("click", function maximizeWindow() {
    ipcRenderer.send("BrowserWindow", "maximize");
  });
