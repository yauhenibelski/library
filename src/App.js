import Test from './test';

class App {
  _container = document.body;

  render() {
    const test = new Test('Work').render();
    console.log(test);
    this._container.append(test);
  }
}

export default App;
