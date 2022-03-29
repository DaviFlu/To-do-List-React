import React, {Component} from 'react'

class Todo extends Component{

  state={
    tarefa:"",
    lista: []
  }

  handleChange = (event) => {
    this.setState({
      tarefa: event.target.value
    })
  }

    add = () => {
      let {lista, tarefa} = this.state
      if (tarefa != ""){
        this.setState({
            tarefa:'',
            lista: lista.concat({
            tarefa: tarefa,
            id: Date.now()
          })
        })
      }
    }

  remover = (id) => {
    let {lista, tarefa} = this.state
    this.setState({
      lista: lista.filter((item) => {
        return item.id != id
      })
    })
  }

  render(){
    return(
      <div>
        <h1>React App To Do List</h1>
        <input onChange={this.handleChange} type="text" value={this.state.tarefa}/>
        <button onClick={this.add}>Add</button>
        <div>
          {this.state.lista.map((item) => (
            <ul>
              <li>{item.tarefa} <button onClick={() => {this.remover(item.id)}}>⌫</button> </li>
            </ul>
          ))}
        </div>
      </div>
    )
  }

}

export default Todo