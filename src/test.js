import Component from './core/components/template/component';

class Test extends Component {
  constructor(test) {
    super('h1', 'test');
    this._container.innerHTML = test;
  }
}

export default Test;
