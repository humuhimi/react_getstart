import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import TodoItem from './TodoItem'
import * as serviceWorker from './serviceWorker';

import todosData from './todosData';


class App extends React.Component  {

    constructor() { 
        super()
        this.state = { 
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) { 
        console.log("changed",id)
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo =>{ 
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos:updatedTodos
            }
        })
    }

    render() { 
        const TodoItems = this.state.todos.map(item => <TodoItem key= {item.id} item={item} handleChange={this.handleChange} />)
        return (
            <div className='todo-list'>
            {TodoItems}
            </div>
        )     
        
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

