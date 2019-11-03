import React, {useState} from "react";

import PersonList from "./PersonList"
import NewPerson from "./NewPerson"
import uuid from "uuid/v1";


function AppTD() {
      const initialData = [
        { id: uuid(), todoText: "Pauli" },
        { id: uuid(), todoText: "Ole" },
        { id: uuid(), todoText: "Lars" }
      ]
      const [todos, setTodos] = useState(initialData);
      const [newTodo, setNewTodo] = useState({ id: "", todoText: "" });
    

      console.log(todos)
    
      const addTodo = todo => {
        if (todo.id === "") { //Indicates a new object
          todo.id = uuid();
          todos.push(todo);
        } else {//if id != "", it must be an existing todo. Find it and add changes
          let todoToEdit = todos.find(t => t.id === todo.id);
          todoToEdit.todoText = todo.todoText;
        }
        setTodos([...todos]);
        setNewTodo({id:"",todoText:""})
      };
    
      const deleteTodo = (id) => {
        if(newTodo.id !==""){  //Cannot delete while we are editing
          return;
        }
        const newTodoList = todos.filter(todo=> todo.id !== id);
        setTodos([...newTodoList]);
      }
    
      const editTodo = (id) => {
        const todoToEdit = todos.find(todo => todo.id === id);
        setNewTodo({...todoToEdit})
      }
      
      
      return (
        <div className="container outer">
          <h2 style={{ textAlign: "center", marginBottom:25 }}>
            Props and Lifting State Persons
       
          </h2>
    
          <div className="row">
            <div className="col-6 allTodos">
              <PersonList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
            </div>
            <div className="col-5 new-todo">
              <NewPerson           
                addTodo={addTodo}
                nextTodo={newTodo}    
                setNewTodo={setNewTodo}        
              />
            </div>
          </div>
      
        </div>
      );
    }
  
    
export default AppTD;