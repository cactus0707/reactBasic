import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // 1. Multiple States
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // 2. One State
  /*const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });*/

  const titleChangeHandler = (event) => {
    // 1. Multiple States
    setEnteredTitle(event.target.value);

    // 2. One State(Not Recommended)
    /* setUserInput({
       ...userInput,
       enteredTitle: event.target.value,
     });*/

    // 3. One State
    /*setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });*/
  };
  const amountChangeHandler = (event) => {
    // 1. Multiple States
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    // 1. Multiple States
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // 1. Multiple States
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);

    // 2. One State
    /*setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });*/
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={"new-expense__controls"}>
        <div className={"new-expense__control"}>
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className={"new-expense__control"}>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className={"new-expense__control"}>
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={"new-expense__actions"}>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
