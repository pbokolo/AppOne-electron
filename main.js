const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  win.loadFile("index.html");
};

app.whenReady().then(() => {
  ipcMain.handle("ping", () => `${Date.now()}`);
  createWindow();
  app.on("activate", () => {
    // Opens the window if none are open(macos)
    if (BrowserWindow.getAllWindows().length === 0) {
      ipcMain.handle("ping", () => `${Date.now()}`);
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    // Quits the app if the platform is not darwin(macos)
    app.quit();
  }
});
