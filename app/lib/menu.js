const {remote } = require('electron');
const Menu = remote.Menu;
const MenuItem = remote.MenuItem;
let file = new MenuItem({
  label:'file',
  click: () => {

  }
})

let x = new Menu();
x.append(file);