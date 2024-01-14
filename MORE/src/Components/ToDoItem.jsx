import React from "react";

const TodoItem = ({ item: { data, isHidden }, index, dispatch }) => {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        width: "70vw",
        height: "100px",
        color: "black",
        borderRadius: "20px",
        filter: `${isHidden ? "blur(2px)" : "blur(0px)"}`,
      }}
    >
      <h3>{isHidden ? "This content is hidden" : data}</h3>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_ISHIDDEN", payload: index });
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export default TodoItem;
