import React, { useState } from "react";

import "./ExpensesItem.css";

import Card from "../UI/Card";
import { sendUpdatedString } from "../../utils";

const ExpensesItem = props => {
    const { date, amount } = props;
    const [ name, setName ] = useState(props.name);

    const month = date.toLocaleString('en-US', {month: "long"});
    const day = date.toLocaleString('en-US', {day: "2-digit"});
    const year = date.getFullYear();
    
    function clickHandler() {
        //update the state of component
        setName(sendUpdatedString(name));
    }

    return (
        <Card className="Expenses-Container__item">
            <div className="Expenses-Container__date">
                <div className="Expenses-Container__date__month">{month}</div>
                <div className="Expenses-Container__date__day">{day}</div>
                <div className="Expenses-Container__date__year">{year}</div>
            </div>
            <div className="Expenses-Container__name">{name}</div>
            <div className="Expenses-Container__price">{amount}</div>
            <button onClick={clickHandler}>Click Me</button>
            {/* <button onClick={() => clickHandler()}>Click Me</button> */}
        </Card>
    )
};

export default ExpensesItem;
