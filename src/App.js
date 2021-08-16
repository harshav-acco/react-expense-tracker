import React, { useState } from 'react';
import './App.css';

import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from './Components/NewExpenses/NewExpenses';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   };

//   render() {
//     return (
//       <div>Expenses Manager</div>
//     )
//   }
// }

const ExpensesData = [
  {
      id: 1,
      expenseName: "Car",
      amount: 2000000,
      date: new Date(2020, 7, 14)
  },
  {
      id: 2,
      expenseName: "Books",
      amount: 2000,
      date: new Date(2021, 7, 14)
  },
  {
      id: 3,
      expenseName: "Chocolates",
      amount: 150,
      date: new Date(2020, 3, 21)
  },
  {
      id: 4,
      expenseName: "House",
      amount: 7000000,
      date: new Date(2019, 7, 14)
  }
];

const App = () => {
  const [expensesData, setExpensesData] = useState(ExpensesData);

  function updateData(data) {
    const modifiedData = [...expensesData, data];
    console.log(modifiedData);
    setExpensesData(modifiedData);
  }

  return (
    <div className="App">
      <NewExpenses updateData={updateData} />
      <Expenses expensesData={expensesData} />
    </div>
    // React.createElement("div", 
    //   { className: "App" }, 
    //   React.createElement(Header, 
    //     { names: "Expenses Manager" }
    //   ),
    //   React.createElement(Header, 
    //     { names: "Expenses Manager" }
    //   ),
    //   React.createElement(Header, 
    //     { names: "Expenses Manager" }
    //   ),
    //   React.createElement(Header, 
    //     { names: "Expenses Manager" }
    //   )
    // )
  )
};
// function App() {
//   return (
//     <div className="App">
//       {/* <h2>Expenses Manager</h2> */}
//       <Header name="Expenses Manager"></Header>
//     </div>
//   );
// }

export default App;
