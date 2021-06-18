const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("api", {
    readFile: (file_name, callback) => ipcRenderer.invoke('readFile', file_name, callback)
})