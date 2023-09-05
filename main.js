const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({ width: 800, height: 600 });
  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    // Opens the window if none are open(macos)
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    // Quits the app if the platform is not darwin(macos)
    app.quit();
  }
});
