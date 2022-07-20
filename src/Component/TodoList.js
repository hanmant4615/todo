import React from "react";

const Todolist = (props) => {
  let v = props.val;
 
  return (
    <>
      <div className="todo_style" style={{ display: "flex" }}>
        <button
          style={{
            margin: "0px 10px",
            backgroundColor: "#8656aa",
            borderRadius: "50%",
            width: "8%",
          }}
          onClick={() => {
            props.onSelect(props.id);
          }}
        >❌</button>
        <li>{v}</li>
      </div>
    </>
  );
};
export default Todolist;
