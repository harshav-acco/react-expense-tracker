import React, { useState } from "react";

import "./NewExpenses.css";
import NewExpensesForm from "./NewExpensesForm";

import Card from "../UI/Card";

const NewExpenses = props => {
    const [ showForm, setFormVisibility ] = useState(false);

    const toggleFormHandler = (visibility = true) => {
        setFormVisibility(visibility);
    };

    // let innerComponents = <button onClick={() => toggleFormHandler()}>Add New Expense</button>;

    // if (showForm) {
        // innerComponents = <NewExpensesForm 
        //     updateExpensesData={props.updateData} 
        //     updateFormVisibility={toggleFormHandler}
        // />
    // }

    return (
        <Card className="Expenses-Containers">
            {/* {innerComponents} */}
            {/* {
                showForm ? 
                    <NewExpensesForm 
                        updateExpensesData={props.updateData} 
                        updateFormVisibility={toggleFormHandler}
                    />  :
                    <button onClick={() => toggleFormHandler()}>Add New Expense</button>
            } */}
            {
                showForm && (
                    <NewExpensesForm 
                        updateExpensesData={props.updateData} 
                        updateFormVisibility={toggleFormHandler}
                    />
                )
            }
            {
                !showForm && (
                    <button onClick={() => toggleFormHandler()}>Add New Expense</button>
                )
            }
        </Card>
    )
};

export default NewExpenses;
