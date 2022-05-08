class Dialog extends BaseComponent {
  constructor({ title, icon, buttons, type, modal = true, body }) {
    super();

    this.title = title ?? 'No Title';
    this.icon = icon;
    this.buttons = buttons ?? [{ label: 'Close', name: 'btnClose', icon: 'close', type: 'primary' }];
    this.type = type ?? 'info';
    this.modal = modal;
    this.body = body;
    this.mainNode = null;
  }

  Render() {
    const dialog = document.createElement('div');
    dialog.classList.add(['ez-dialog', type]);

    const header = document.createElement('div');
    header.classList.add('header');

    if (this.icon) {
      const icon = document.createElement('i');
      icon.classList.add('material-icons');
      icon.innerText(icon);

      header.appendChild(icon);
    }

    const title = document.createElement('h5');
    title.innerText(this.title);
    header.appendChild(title);

    const body = document.createElement('div');
    body.append(this.body);

    const buttons = document.createElement('div');
  }
}
