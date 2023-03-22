import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, changeFilterYear] = useState("2020");

  const dateChangeHandler = (year) => {
    changeFilterYear(year);
  };

  // Filter the array of years based on the filter year state
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          filterDateChange={dateChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
