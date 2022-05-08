class Dialog extends BaseComponent {
  constructor({ title = null, icon = null, buttons = [], type = null, modal = true, body = null }) {
    super();

    this.title = title ?? 'No Title';
    this.icon = icon ?? 'info';
    this.buttons = buttons;
    this.type = type ?? 'info';
    this.modal = modal;
    this.body = body;
    this.mainNode = null;
    this.Rendered = false;

    if (this.buttons.length === 0) {
      this.buttons.push({ label: 'Close', name: 'btnClose', icon: 'close', type: 'primary' });
    }
  }

  Render() {
    if (this.Rendered) return;

    const dialog = document.createElement('div');
    dialog.classList.add('ez-dialog');

    if (this.type) dialog.classList.add(this.type);

    if (this.modal) {
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');

      dialog.appendChild(overlay);
    }

    const container = document.createElement('div');
    container.classList.add('container');

    dialog.appendChild(container);

    const header = document.createElement('div');
    header.classList.add('header');

    if (this.icon) {
      const icon = document.createElement('i');
      icon.classList.add('material-icons');
      icon.innerText = this.icon;

      header.appendChild(icon);
    }

    const title = document.createElement('h5');
    title.innerText = this.title;
    header.appendChild(title);

    const body = document.createElement('div');
    body.classList.add('body');

    if (this.body) body.append(this.body);

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');

    this.buttons.forEach(btn => {
      const button = document.createElement('button');
      button.type = 'button';

      if (btn.type) button.classList.add(btn.type);

      button.name = btn.name;

      if (btn.icon) {
        const btnIcon = document.createElement('i');
        btnIcon.classList.add('material-icons');
        btnIcon.innerText = btn.icon;

        button.appendChild(btnIcon);
      }

      const btnLabel = document.createElement('span');
      btnLabel.innerText = btn.label;

      button.appendChild(btnLabel);

      buttons.appendChild(button);
    });

    buttons.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();

      const btn = e.target.closest('button');

      this.trigger('buttonclick', { target: btn });
    });

    container.appendChild(header);
    container.appendChild(body);
    container.appendChild(buttons);

    this.mainNode = dialog;

    document.body.appendChild(dialog);

    this.Rendered = true;
  }

  Close() {
    this.Rendered = false;
    this.mainNode.remove();
  }
}

class Info extends Dialog {
  constructor({ title, message }) {
    super({ title, message });

    this.icon = 'info';
    this.title = title ?? 'Information';
    this.body = message;

    this.Render();

    this.on('buttonclick', () => this.Close());
  }
}

class Alert extends Dialog {
  constructor({ title, message }) {
    super({ title, message });

    this.icon = 'dangerous';
    this.title = title ?? 'Alert';
    this.body = message;
    this.type = 'alert';

    this.Render();

    this.on('buttonclick', () => this.Close());
  }
}

class Warn extends Dialog {
  constructor({ title, message }) {
    super({ title, message });

    this.icon = 'warning';
    this.title = title ?? 'Alert';
    this.body = message;
    this.type = 'warning';

    this.Render();

    this.on('buttonclick', () => this.Close());
  }
}

class Confirm extends Dialog {
  constructor({ title, message }) {
    super({ title, message });

    this.icon = 'help';
    this.title = title ?? 'Confirm';
    this.body = message;
    this.buttons = [
      { name: 'btnYes', label: 'Yes', icon: 'check' },
      { name: 'btnNo', label: 'No', icon: 'close' },
    ];

    this.Render();

    this.on('buttonclick', data => {
      this.Close();

      setTimeout(() => {
        if (data.target.name === 'btnYes') this.trigger('accept');
        else this.trigger('reject');
      }, 0);
    });
  }
}

// class Prompt extends Dialog {}
