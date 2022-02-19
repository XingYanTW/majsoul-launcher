// main.js

// 控制应用生命周期和创建原生浏览器窗口的模组
const { app, BrowserWindow } = require("electron");
const { ipcMain } = require("electron");

function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 750,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
    frame: false,
  });

  mainWindow.loadFile("index.html");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.on("BrowserWindow", function (event, args) {
  if (args === "maximize")
    BrowserWindow.getFocusedWindow().isMaximized()
      ? BrowserWindow.getFocusedWindow().unmaximize()
      : BrowserWindow.getFocusedWindow().maximize();
  else if (args === "minimize") BrowserWindow.getFocusedWindow().minimize();
  else if (args === "close") BrowserWindow.getFocusedWindow().close();
});
