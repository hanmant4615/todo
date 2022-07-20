import React, { useState } from "react";
import Todolist from "./Component/TodoList";
import "./App.css";

const App = () => {
  let [inputList, setinputList] = useState("");
  let [items, setItems] = useState([]);
  const deleteItem = (id) => {
    // console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arr, index) => {
        return index !== id;
      });
    });
  };
  const inputData = (e) => {
    setinputList(e.target.value);
  };
  const change = () => {
    setItems((oldItems) => {
         return [...oldItems, inputList];
    });
    setinputList("");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To Do list</h1>
          <br />
          <input
            type="text"
            placeholder="Add task"
            onChange={inputData}
            value={inputList}
          />
          <button  className="btn" onClick={change}>
            +
            </button>
          <ol>
            {items.map((itemval, index) => {
              return (
                <Todolist
                  key={index}
                  id={index}
                  val={itemval}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
