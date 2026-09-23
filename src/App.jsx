import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const DYMMY_EXPENSES = [{
    id: 'id1',
    date: new Date(2024, 10, 12),
    title: 'New book',
    amount: 30.99
  },
  {
    id: 'id2',
    date: new Date(2020, 4, 20),
    title: 'Doohickey',
    amount: 99.99
  },
  {
    id: 'id3',
    date: new Date(2021, 2, 28),
    title: 'Gadget',
    amount: 19.99
  }]

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={DYMMY_EXPENSES} />
    </div>
  )
}

export default App;
