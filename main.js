const {app, BrowserWindow, ipcMain} = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width:1340,
        height:800,
        frame:false,
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    win.loadFile("index.html");

    ipcMain.on("close",(event) =>{
        win.close();
    })
    ipcMain.on("minimize",(event) =>{
        win.minimize();
    })
    ipcMain.on("reload",(event) =>{
        win.reload();
    })


}


app.whenReady().then(() => {
    createWindow();
})