import React from 'react';
import './Todo.css';
//function base -> argument로 porps를 받는다.
// <Todo title={"Dinner"} done={false}></Todo>
const Todo = props => {
  return (
    <div className = 'Todo'>
      <div className={`text ${props.done && 'done'}`} onClick={props.clicked}>
        {props.title}
      </div>
      {props.done && <div className='done-mark'>&#x2713;</div>}
    </div>
  );
};

// // class base 
// class Todo extends Component {

// }

export default Todo;