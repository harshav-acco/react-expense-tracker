import React from "react";

//immediate dependencies
import "./Expenses.css";
import ExpensesItem from "./ExpensesItem";

//external dependencies
import Header from "../UI/Header";
import Card from "../UI/Card";

const Expenses = props => {
    const { expensesData } = props;

    return (
        // className convention is not mandatory but good to follow
        <Card className="Expenses-Container">
            <div className="Expenses-Container__header">
                <Header names="Expenses Manager"></Header>
            </div>
            {
                expensesData.map(expense => (
                    <ExpensesItem 
                        key={expense.id}
                        date={expense.date} 
                        amount={expense.amount} 
                        name={expense.expenseName} 
                    />
                ))
            }
        </Card>
    )
};

export default Expenses;
