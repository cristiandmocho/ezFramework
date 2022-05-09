const menuEntries = [
  { name: 'mnuItem1', label: 'Menu item with larger content', icon: 'home' },
  { name: '-' },
  { name: 'mnuItem2', label: 'Menu item 2', icon: '' },
  { name: 'mnuItem3', label: 'Menu item 3', icon: 'home' },
  { name: 'mnuItem4', label: 'Menu item 4', icon: 'home' },
  { name: 'mnuItem5', label: 'Menu item 5', icon: 'home' },
  { name: '-' },
  { name: 'mnuItem6', label: 'Menu item 6', icon: '' },
  { name: 'mnuItem7', label: 'Menu item 7', icon: 'home' },
];

const fm = new FloatingMenu({ menuEntries, title: 'Menu de contexto', position: 'mouse' });
fm.Bind(document.querySelector('.context'));

fm.on('menuselected', menu => {
  console.log(menu);
  if (menu.name === 'mnuItem7') fm.Destroy();
});
