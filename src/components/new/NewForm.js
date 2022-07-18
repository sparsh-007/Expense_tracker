import React ,{useState}from "react";
import "../new/NewExpense.css";

function NewForm(props) {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    //  const [userInput,setUserInput] =  useState({
    //         enteredTitle:'',
    //         enteredAmount:'',
    //         enteredDate:''
    //     });
    const titleChangeHandler = (event) => {
      // console.log(event.target.value);
      // setUserInput({
      //     ...userInput,
      //     enteredTitle:event.target.value,
      // });
      // setUserInput((prevState)=>{
      //     return {...prevState,enteredTitle:event.target.value}

      // });
      setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
      // setUserInput((prevState) => {
      //   return { ...prevState, enteredAmount: event.target.value };
      setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
      // setUserInput((prevState) => {
      //   return { ...prevState, enteredDate: event.target.value };
      // });
      setEnteredDate(event.target.value);
    };
    //   console.log(enteredTitle);
    //   console.log(enteredAmount);
    //   console.log(enteredDate);
    const submitHandler = (event) => {
      event.preventDefault();
      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
      };
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
    props.onSaveExpenseData(expenseData);
    };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Expense Name</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="text"
              value={enteredAmount}
              onChange={amountChangeHandler}
              min="0.01"
              step="0.01"
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              value={enteredDate}
              type="date"
              onChange={dateChangeHandler}
              min="2019-01-01"
              max="2022-12-31"
            ></input>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default NewForm;
