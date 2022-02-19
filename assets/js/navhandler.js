const { ipcRenderer } = require("electron");

document.getElementById("close").addEventListener("click", closeWindow);
document.getElementById("minimize").addEventListener("click", minimizeWindow);
document.getElementById("maximize").addEventListener("click", maximizeWindow);

function closeWindow() {
  ipcRenderer.send("BrowserWindow", "close");
}

function minimizeWindow() {
  ipcRenderer.send("BrowserWindow", "minimize");
}

function maximizeWindow() {
  ipcRenderer.send("BrowserWindow", "maximize");
}
