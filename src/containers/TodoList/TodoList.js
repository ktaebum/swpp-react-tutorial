import React, { Component } from 'react';


class TodoList extends Component { 
    render() { 
        return ( 
        <div className='TodoList'>{this.props.title}</div> 
        ); 
    } 

} export default TodoList;