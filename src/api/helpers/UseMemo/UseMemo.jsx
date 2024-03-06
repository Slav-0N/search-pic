import { useMemo, useState } from "react";
import React from "react";

export const UseMemo = () => {
  const [monthes, setMonthes] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ]);
  const [query, setQuery] = useState("Jan");
  const [count, setCount] = useState(0);

  const searchMonth = useMemo(
    () => monthes.filter((month) => month.includes(query)),
    [monthes, query]
  );

  const clickCount = () => {
    setCount((prev) => (prev += 1));
  };

  return (
    <>
      <div>{searchMonth}</div>
      <button onClick={clickCount}>+1</button>
      <span>{count}</span>
    </>
  );
};
