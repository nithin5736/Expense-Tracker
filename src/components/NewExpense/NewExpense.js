import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing,setIsEditing] = useState(false);
  
  const editChangeHandler = () => {
    setIsEditing(true);
  }

  const stopChangeHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editChangeHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onAddExpense={props.onAddExpense} onCancel={stopChangeHandler} />}
    </div>
  );
};

export default NewExpense;
