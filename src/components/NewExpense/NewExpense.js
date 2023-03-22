import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    // Getting the expense data from the ExpenseForm component
    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(Math.random() * (1000 - 1) + 1).toString() // random id between 1-1000
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
        setShowForm(false);
    }

    const openForm = () => {
        setShowForm(true);
    }

    const closeForm = () => {
        setShowForm(false);
    }
    return (
        <div className="new-expense">
            {!showForm && <button onClick={openForm}>Add New Expense</button>}
            {showForm && <ExpenseForm onCancel={closeForm} onSaveExpenseData={saveExpenseDateHandler}/>}
        </div>
    );
};


export default NewExpense;