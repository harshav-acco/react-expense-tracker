import React from "react";

import "./NewExpenses.css";
import NewExpensesForm from "./NewExpensesForm";

import Card from "../UI/Card";

const NewExpenses = props => {

    return (
        <Card className="Expenses-Containers">
            <NewExpensesForm updateExpensesData={props.updateData} />
        </Card>
    )
};

export default NewExpenses;
