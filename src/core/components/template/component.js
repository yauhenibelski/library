class Component {
  constructor(tagName, className) {
    this._container = document.createElement(tagName);
    if (className) this._container.className = className;
  }

  render() {
    return this._container;
  }
}

export default Component;
