import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
// UseState revealuates the web page to apply changes
import React, { useState } from "react";

const ExpenseItem = (props) => {
  // returns an array. First val is the variable and the second is update function
  const [title, setTitle] = useState(props.title);

  // Handles button title change click
  const clickHandler = () => {
    setTitle("Update");
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2 className="expense-item h2">{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
