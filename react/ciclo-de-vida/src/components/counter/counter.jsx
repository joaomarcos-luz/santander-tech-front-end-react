import React from 'react';

export class Counter extends React.Component {

    constructor() {
        super();
        console.log('O component counter foi criado');

        this.state = { counter: 0 };
    }

    UNSAFE_componentWillMount() {
        console.log('O component counter sera montado');
    }

    componentDidMount() {
        console.log('O component counter foi montado');

        document.addEventListener('scroll', this.consoleScroll);

    }

    shouldComponentUpdate() {
        return true;
    }

    UNSAFE_componentWillUpdate() {  
        console.log('O component counter sera atualizado');
    }

    componentDidUpdate() {                
        console.log('O component counter foi atualizado');
    }

    componentWillUnmount() {            
        console.log('O component counter sera desmontado');

        document.removeEventListener('scroll', this.consoleScroll);
    }

    consoleScroll() {
        console.log('Rolando a pagina');
    }
 
  render() {

    console.log('O component counter foi renderizado');

    return (
      <div>
       <h1>{this.state.counter}</h1>

       <button onClick={() => [
        this.setState({ counter: this.state.counter + 1 })
       ]}>Almentar</button>

       <button onClick={() => {
            this.setState({ counter: this.state.counter - 1 })
       }}>Diminuir</button>
      </div>
    );
  }
}