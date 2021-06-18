const {app, BrowserWindow, ipcMain, dialog} = require('electron')
const jsonc = require('./app/js/jsonc-reader')
const fs = require('fs');
const path = require('path');
const isDev = require('electron-is-dev');
if(isDev) {
  require('electron-context-menu')({
    prepend: (params, browserWindow) => []
  });
}

let mainWindow;

app.on('ready', function() {

    mainWindow = new BrowserWindow({
        name: "Devoir",
        width: 720,
        height: 720,
        icon: path.join(__dirname, 'app/icons/main.png'),
        webPreferences: {
            preload:path.join(__dirname, "app/js/preload.js")
        }
    })

    // close the app when all windows are closed
    app.on('window-all-closed', function() {
        app.quit();
    });

    app.on('open-file', function (event, file) {
        var content = fs.readFileSync(file).toString();
        mainWindow.webContents.send('file-opened', file, content);
    });

    mainWindow.setMenu(null);
    mainWindow.loadURL(path.join('file://', __dirname, "app") + '/checkForUpdate.html');

});

// read file
ipcMain.handle('readFile', (event, ...args) => {
    let file = args[0]
    let file_content = jsonc.read(file, 'utf8')
    return JSON.parse(file_content)

})