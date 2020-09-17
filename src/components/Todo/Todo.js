import React, { Component } from 'react';
import './Todo.css'

// function absed decl
// <Todo title={'Dinner'} done={false}></Todo>
const Todo = props => {
    return (
        <div className='Todo'>
            <div className={`text ${props.done && 'done'}`} onClick={props.clicked}>
                {props.title}
            </div>
            {props.done && <div className='done-mark'>&#x2713;</div>}
        </div>
    );
};

// class based declaration
// class Todo extends Component {
//     render() {
//         this.props;
//     }
// }

export default Todo;