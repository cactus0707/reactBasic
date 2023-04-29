import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // useState returns an array with 2 elements
  // 1st element is the current state value
  // 2nd element is a function that allows us to update the state
  // useState is a React Hook
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className={"expense-item"}>
      <ExpenseDate date={props.date} />
      <div className={"expense-item__description"}>
        <h2>{title}</h2>
        <div className={"expense-item__price"}>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
// console.log returns the previous state value
// console.log(title); -> Updated!
// useState reserves the state value for the next render cycle
// react will re-evaluate the component function
// react will re-run the component function
// react will re-render the component when the state changes
// react will re-render the JSX content
// react will update the DOM to match the new JSX content
// react will not re-render the entire page
// react will only re-render the component that changed
// react will only re-render the component that uses the state that changed
