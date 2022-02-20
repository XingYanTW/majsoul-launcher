const { app, BrowserWindow, ipcMain } = require("electron");

function createWindow() {
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

ipcMain.on("BrowserWindow", function (_event, args) {
  if (args === "maximize")
    BrowserWindow.getFocusedWindow().isMaximized()
      ? BrowserWindow.getFocusedWindow().unmaximize()
      : BrowserWindow.getFocusedWindow().maximize();
  else if (args === "minimize") BrowserWindow.getFocusedWindow().minimize();
  else if (args === "close") BrowserWindow.getFocusedWindow().close();
});
