import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <p className="expenses-list__fallback">No expenses found.</p>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
