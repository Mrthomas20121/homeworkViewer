const {app, dialog, BrowserWindow, Menu} = require('electron')
const fs = require('fs');
const path = require('path');
const isDev = require('electron-is-dev');
if(isDev) {
  require('electron-context-menu')({
    prepend: (params, browserWindow) => []
  });
}
let homework = {
  label_add_homework:'add homework',
  label_view_homework:'view homework'
}

var mainWindow;
app.on('ready', function() {

  mainWindow = new BrowserWindow({
    name: "Devoir",
    width: 720,
    height: 720,
    icon: __dirname + '\\app\\icons\\main.png',
	webPreferences: {
	  nodeIntegration: true
	}
   })

app.on('window-all-closed', function() {
      app.quit();
});

app.on('open-file', function (event, file) {
    var content = fs.readFileSync(file).toString();
    mainWindow.webContents.send('file-opened', file, content);
});
var m = Menu.buildFromTemplate([
	{
    label: 'Add homeworks',
    accelerator: "Ctrl+N",
      click () { 
      mainWindow.loadURL('file://' + path.join(__dirname, "app") + '/add.html');
    }
  },
  {
    label : 'View homeworks',
    accelerator: "Ctrl+V",
    click() {
      if(mainWindow)
      mainWindow.loadURL('file://' + path.join(__dirname, "app") + '/index.html');
    }
  }
  ])
mainWindow.setMenu(m);
mainWindow.loadURL('file://' + path.join(__dirname, "app") + '/index.html');

});
