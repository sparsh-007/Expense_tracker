import React,{useState} from "react";
import ExpenseItem from "./components/ExpenseItem";
import intialExpenses from "./Expenses.jsx";
import "./components/ExpenseItem.css"
import NewExpense from "./components/new/NewExpense";
import ExpensesFilter from "./components/Filter";
// import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expense,setExpense]=useState(intialExpenses);
  const [year,setYear]=useState("");
  const filterChangeHandler =selectedYear=>{
    setYear(selectedYear);
  }

  const addExpense=(exp)=>{
    //method 1 direct approach 
    setExpense([exp, ...expense]);
    //second one using fucntion prev state type 
    // setExpense(prevExp=>{
    //   return([exp,...prevExp]);
    // })



  
  }
  return (
    <>
      <NewExpense onAddExpense={addExpense} />
      <div className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler} />
        {expense.filter(exp=>exp.date.getFullYear().toString() === year).map((val) => {
          return (
            <ExpenseItem
              key={val.id}
              title={val.title}
              date={val.date}
              amount={val.amount}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
