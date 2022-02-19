const {remote, ipcRenderer, BrowserWindow} = require('electron');
const {browserModuleNames} = require("@electron/remote/dist/src/common/module-names");

document.getElementById('close').addEventListener('click', closeWindow);
document.getElementById('minimize').addEventListener('click', minimizeWindow);
document.getElementById('maximize').addEventListener('click', maximizeWindow);

/*
  getFocusedWindow() may return null.
  If a user uses global keyboard shortcut to trigger
  minimizeWindow, there may not be any window that
  is focused right now
*/
const getWindow = () => remote.BrowserWindow.getFocusedWindow();

function closeWindow () {
    ipcRenderer.send('BrowserWindow', 'close')
}

function minimizeWindow () {
    ipcRenderer.send('BrowserWindow', 'minimize')
}

function maximizeWindow () {
    ipcRenderer.send('BrowserWindow', 'maximize')
}