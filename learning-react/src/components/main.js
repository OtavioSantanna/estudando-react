import React, {Component} from "react";
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';
import './main.css';

export default class Main extends Component{
    state = {
        novaTarefa: '',
        tarefas: []
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {tarefas} = this.state;
        let { novaTarefa} = this.state;
        novaTarefa = novaTarefa.trim();

        if(tarefas.indexOf(novaTarefa) != -1) return;

        const novasTarefas = [...tarefas];

        this.setState({
            tarefas: [...novasTarefas, novaTarefa],
        })
    }

    handleChange = (e) =>{
        this.setState({
            novaTarefa: e.target.value,
        });
    }

    render(){
        const{ novaTarefa, tarefas } = this.state;

        return(
            <div className="main">
                <h1>{novaTarefa}</h1>

                <form onSubmit={this.handleSubmit} action='#' className="form">
                    <input onChange={this.handleChange} type="text"
                    value={novaTarefa}></input>
                    <button type="submit">
                        <FaPlus/>
                    </button>
                </form>

                <ul className="tarefas">
                    {tarefas.map((tarefas) => (
                        <li key={tarefas}>
                            {tarefas}
                            <div>
                                <FaEdit className="edit"/>
                                <FaWindowClose className="delete"/>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
