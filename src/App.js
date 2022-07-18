import ExpenseItem from "./components/ExpenseItem";
import expenses from "./Expenses.jsx";
import "./components/ExpenseItem.css"
import NewExpense from "./components/new/NewExpense";
// import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const addExpense=(expense)=>{
    console.log("from app.js");
    console.log(expense);

  }
  return (
    <>
      <NewExpense onAddExpense={addExpense}/>
      <div className="expenses">
        {expenses.map((val) => {
          return (
            <ExpenseItem key={val.amount}
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
