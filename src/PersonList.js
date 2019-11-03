import React from 'react';
import PropTypes from 'prop-types';

const PersonList = ({todos,editTodo,deleteTodo }) => {
  
  const del = (evt,id)=> {
    debugger
    evt.preventDefault();
    deleteTodo(id)
  }
  return (
    <React.Fragment>
      <h2>All Person</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.todoText} <span style={{fontSize:"smaller"}}>
            <a href="/#" onClick= {(e)=>{e.preventDefault();deleteTodo(todo.id)}}> (delete, </a> 
            <a href="/#" onClick= {(e)=>{e.preventDefault();editTodo(todo.id)}}> edit) </a> 
            </span>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

PersonList.propTypes = {
  todos: PropTypes.array,
  editTodo: PropTypes.func,
  deleteTodo: PropTypes.func

}
export default PersonList;
