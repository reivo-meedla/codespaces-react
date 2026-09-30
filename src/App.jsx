import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const DYMMY_EXPENSES = [{
  id: 'id1',
  date: new Date(2024, 10, 12),
  title: 'New book',
  amount: 30.99
},
{
  id: 'id2',
  date: new Date(2023, 4, 20),
  title: 'Doohickey',
  amount: 99.99
},
{
  id: 'id3',
  date: new Date(2021, 2, 28),
  title: 'Gadget',
  amount: 19.99
}]

const App = () => {
  const [expenses, setExpenses] = useState(DYMMY_EXPENSES);



  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App;
