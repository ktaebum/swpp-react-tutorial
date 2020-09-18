import React, { Component } from 'react';
import Todo from '../../components/Todo/Todo';
import "./TodoList.css";
import TodoDetail from '../../components/TodoDetail/TodoDetail';
import { NavLink } from 'react-router-dom';

class TodoList extends Component { 
    // This acts as if this.state = {...} was inside constructor()
    state = {
        todos: [
            {id: 1, title: 'SWPP', content: 'take swpp class', done: true},
            {id: 2, title: 'Movie', content: 'watch movie', done: false},
            {id: 3, title: 'Dinner', content: 'eat dinner', done: false}
        ],
        selectedTodo: null,
    }
    render() { 
        const todos = this.state.todos.map((td) => {
            return ( <Todo key={td.id} title={td.title}
                            done={td.done} clicked={() => this.clickTodoHandler(td)}/> );
        });
        return ( 
        <div className='TodoList'>
            <div className='title'>{this.props.title}</div> 
            <div className='todos'>{todos}</div>
            {TodoDetail}
            <NavLink to='/new-todo' exact>New Todo</NavLink>
        </div>
        );
        let TodoDetail = null;
        if (this.state.selectedTodo) {
            TodoDetail = <TodoDetail title={this.state.selectedTodo.title}
                    content={this.state.selectedTodo.content} />
        }
    }
    clickTodoHandler = td => {
        if (this.state.selectedTodo === td) {
            this.setState({selectedTodo: null});
        } else {
            this.setState({selectedTodo: td});
        }
    }
} 
export default TodoList;