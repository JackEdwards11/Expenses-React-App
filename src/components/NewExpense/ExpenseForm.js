import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Create varriables for possible new expenses within the inputs

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  

  // Setting variables with one object instead of multiple variables

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: ""
  // });

  // Create change handlers for new expense inputs
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // });
    // setUserInput((prevState) => {
    //   return ({
    //     ...prevState,
    //     enteredTitle: event.target.value
    //   });
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // });
    // setUserInput((prevState) => {
    //   return ({
    //     ...prevState,
    //     enteredAmount: event.target.value
    //   });
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // });
    // setUserInput((prevState) => {
    //   return ({
    //     ...prevState,
    //     enteredDate: event.target.value
    //   });
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.onSaveExpenseData(expenseData);
  };

  

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
