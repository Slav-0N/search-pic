import React, { useReducer, useEffect } from "react";

const reduce = (prevState, { type, payload }) => {
  // if (type === "up") {
  //   return { ...prevState, counter: prevState.counter + payload };
  // }
  switch (type) {
    case "up":
      return { ...prevState, counter: prevState.counter + payload };
    case "down":
      return { ...prevState, counter: prevState.counter - payload };

    default:
      console.log("no such type");
  }
};

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reduce, {
    name: null,
    counter: 0,
    country: "",
    products: [],
  });

  const disp = () => dispatch({ type: "up", payload: 1 });

  return (
    <>
      <div>{state.counter}</div>
      <button onClick={disp}>+1</button>
      <button
        onClick={() => {
          dispatch({ type: "down", payload: 10 });
        }}
      >
        -1
      </button>
    </>
  );
};
