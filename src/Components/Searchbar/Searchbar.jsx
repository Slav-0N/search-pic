import React, { Component } from "react";
import yearData from "./data.json";

export default class Searchbar extends Component {
  naughtyOrNice = (data) => {
    let naughty = 0;
    let nice = 0;
    for (const month in data) {
      // const everyMonth = data[month];
      for (const day in data[month]) {
        data[month][day] === "Naughty" ? (naughty += 1) : (nice += 1);
      }
    }
    console.log(naughty);
    console.log(nice);
    return nice >= naughty ? "Nice" : "Naughty";
  };

  render() {
    console.log(this.naughtyOrNice(yearData));
    return (
      <>
        <div>Searchbar</div>
        <h2>111</h2>
      </>
    );
  }
}
