
import React from 'react';
import { Counter } from './components/counter/counter';


class App extends React.Component {

  constructor() {
    super();
    this.state = { showCounter: false };
  }
  render() {
    return (
      <div> 
        <h1>Ciclo de Vida no reeac</h1>

        <button onClick={() => {
          this.setState({ showCounter: !this.state.showCounter })
        }}>
          {this.state.showCounter ? 'Ocultar Contador' : 'Mostra Contador'}
        </button>

        {this.state.showCounter ? <Counter/> : null}
      </div>
    );
  }
}

export default App; 
