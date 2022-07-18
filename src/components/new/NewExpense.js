import React from "react";
// import "../NewExpense/NewExpense.css";
import "../new/NewExpense.css";
import NewForm from "../new/NewForm.js"

function NewExpense(props) {
  const dataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: parseFloat(Math.random().toString()).toFixed(2),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <NewForm onSaveExpenseData={dataHandler} />
    </div>
  );
}

export default NewExpense;
