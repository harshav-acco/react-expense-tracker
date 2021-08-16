import React, { useState } from "react";

import "./NewExpensesForm.css";

const NewExpensesForm = props => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(new Date());

    function titleChangeHandler(e) {
        setTitle(e.target.value);
    }

    function valueChangeHandler(e) {
        setAmount(e.target.value);
    }

    function dateChangeHandler(e) {
        setDate(e.target.value);
    }

    function onFormSubmissionHandler(e) {
        //here i have to submit the data
        e.preventDefault();
        props.updateExpensesData({
            id: Math.random().toString(),
            expenseName: title,
            amount,//amount: amount
            date: new Date(date),
        });
        setTitle("");
        setAmount(0);
        setDate(new Date());
    }

    return (
        <form onSubmit={onFormSubmissionHandler}>
            <div className="new-expenses__controls">
                <div className="new-expenses__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={title} />
                </div>
                <div className="new-expenses__control">
                    <label>Amount</label>
                    <input type="number" value={amount} onChange={valueChangeHandler} />
                </div>
                <div className="new-expenses__control">
                    <label>Date</label>
                    <input 
                        type="date" 
                        min="2019-01-01" 
                        max="2021-12-31" 
                        value={date} 
                        onChange={dateChangeHandler} 
                    />
                </div>
            </div>  
            <div className="new-expenses__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default NewExpensesForm;
