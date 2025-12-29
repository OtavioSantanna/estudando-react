import React, {Component} from "react";
import './main.css';

export default class Main extends Component{
    state = {
        novaTarefa: '',
    };

    handleChange = (e) =>{
        this.setState({
            novaTarefa: e.target.value,
        });
    }

    render(){
        const{ novaTarefa } = this.state;

        return(
            <div className="main">
                <h1>{novaTarefa}</h1>

                <form action='#' className="form">
                    <input onChange={this.handleChange} type="text"
                    value={novaTarefa}></input>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        )
    }
}
