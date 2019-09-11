import React, { Component } from 'react'

class ToDo extends Component {

state = {
count: 0,
inputText: '',
todos:[]
}
increase = () => {
this.setState({ count: this.state.count + 1})
}
handleTextChange = (e) => {
this.setState({inputText: e.target.value})
}
submitTodo = () => {
const currentTodos = this.state.todos
currentTodos.push(this.state.inputText)
console.log(currentTodos)
this.setState({todos: currentTodos})
}

render (){
return (
<div>
<h1>Count:</h1>
<h3>{this.state.count}</h3>
<button onClick={this.increase}>Increase counter</button>
<input type="text" 
onChange={this.handleTextChange}
value={this.state.inputText}/>
<button onClick={this.submitTodo}>Add Todo</button>
{
this.state.todos.map((todo, idx) => {
return (
<p key={idx}>{todo}</p>
)
})
}

</div>
)
}
}
export default ToDo


