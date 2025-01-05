import React from "react";

export class Couter extends React.Component {

    constructor(){
        super();
        this.state = {
            contador: 0,
            text: "",
            password: ""
        }
    }
s
    render() {
        return(
            <div style={{ marginTop: "20px"}}>

            <h1>{this.state.contador}</h1>

            <div>
                <button onClick={() => {
                    this.setState({ contador: this.state.contador - 1 })
                }}>Diminuir</button>
                
                <button onClick={() => {
                   this.setState({ contador: this.state.contador + 1 })
                }}>Almentar</button>
            </div>

            <form style={{ marginTop: "40px" }}>
                <input type="text" placeholder="Nome" value={this.state.text} onChange={(event) => {
                    this.setState({ text: event.target.value})
                }}/>

                <input type="password" placeholder="Senha" value={this.state.password} onChange={(event) => {
                    this.setState({ password: event.target.value})
                }}/>

                <button>Enviar</button>
            </form>
        </div>
        )
    }
}
