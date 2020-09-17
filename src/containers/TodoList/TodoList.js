import React, { Component } from 'react';
import Todo from '../../components/Todo/Todo';
import TodoDetail from '../../components/TodoDetail/TodoDetail';
import './TodoList.css'
import { NavLink } from 'react-router-dom';

class TodoList extends Component {
    state = {
        todos: [
            { id: 1, title: 'SWPP', content: 'take swpp class', done: true },
            { id: 2, title: 'Movie', content: 'watch movie', done: false },
            { id: 3, title: 'Dinner', content: 'eat dinner', done: false },
        ],
        selectedTodo: null,
    }

    clickTodoHandler = td => {
        if (this.state.selectedTodo === td) {
            // BAD: this.state.selectedTodo = null; it won't trigger rendering.
            this.setState({ selectedTodo: null });
        } else {
            this.setState({ selectedTodo: td });
        }
    }
    render() {
        const todos = this.state.todos.map((td) => {
            // key = 각각의 identifier , 각 object를 구분할 수 있는
            return (<Todo key={td.id} title={td.title}
                done={td.done} clicked={() => this.clickTodoHandler(td)} />);
        });
        let todoDetail = null;
        if (this.state.selectedTodo) {
            todoDetail = <TodoDetail title={this.state.selectedTodo.title} content={this.state.selectedTodo.content} />
        }
        return (
            <div className='TodoList'>
                <div className='title'>{this.props.title}</div>
                <div className='todos'>{todos}</div>
                {todoDetail}
                <NavLink to='/new-todo' exact>New Todo</NavLink>
            </div>
        );
        //return <div className='TodoList'>{this.props.title}</div>

        

    }
}

export default TodoList