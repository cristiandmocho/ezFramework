class FloatingMenu extends BaseComponent {
  #bind = e => {
    e.preventDefault();
    e.stopPropagation();

    this.Show(e);
  };

  #hide = e => {
    if (e.target === this.mainNode || e.target.closest('.ez-floatmenu') === this.mainNode) return;
    this.Hide();
  };

  constructor({ menuEntries = [], title = '', position = 'mouse', offset = { left: 0, top: 0 } }) {
    super();

    this.menuEntries = menuEntries;
    this.title = title;
    this.position = position;
    this.mainNode = null;
    this.boundTo = null;
  }

  Bind(element) {
    element.addEventListener('contextmenu', this.#bind);
    document.addEventListener('click', this.#hide);

    this.boundTo = element;
  }

  Unbind(element) {
    element.removeEventListener('contextmenu', this.#bind);
    document.removeEventListener('click', this.#hide);

    this.boundTo = null;
  }

  Show(mouseEvent) {
    if (!this.mainNode) {
      const container = document.createElement('div');
      container.classList.add('ez-floatmenu');

      const header = document.createElement('h5');
      const buttons = document.createElement('div');
      buttons.classList.add('buttons');

      if (this.title) header.innerText = this.title;
      container.appendChild(header);
      container.appendChild(buttons);

      this.menuEntries.forEach(entry => {
        if (entry.name === '-') {
          const sep = document.createElement('hr');
          buttons.appendChild(sep);
        } else {
          const btn = document.createElement('button');
          btn.classList.add('menu-item');
          btn.name = entry.name;

          const icon = document.createElement('i');
          icon.classList.add('material-icons');
          icon.innerText = entry.icon ?? '';

          const label = document.createElement('span');
          label.innerText = entry.label;

          btn.append(icon, label);

          buttons.appendChild(btn);
        }
      });

      document.body.appendChild(container);

      this.mainNode = container;
      this.mainNode.addEventListener('click', e => {
        if (e.target === this.mainNode) return;

        const menu = e.target.closest('.menu-item');

        if (menu) this.trigger('menuselected', menu);
      });
    } else {
      this.mainNode.style.display = 'grid';
    }

    if (this.position === 'mouse') {
      this.mainNode.style.left = mouseEvent.clientX + 'px';
      this.mainNode.style.top = mouseEvent.clientY + 'px';
    }

    if (this.position === 'element') {
      this.mainNode.style.left = `${(mouseEvent.target.clientLeft + mouseEvent.target.clientWidth) / 2}px`;
      this.mainNode.style.top = `${mouseEvent.target.offsetTop + mouseEvent.target.clientHeight / 2}px`;
    }
  }

  Hide() {
    this.mainNode.style.display = 'none';
  }

  Destroy() {
    this.Unbind(this.boundTo);

    this.mainNode.remove();
    this.mainNode = null;
  }
}
