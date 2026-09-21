import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [{
    date: new Date(2024, 10, 12),
    title: 'New book',
    price: 30.99

  },
  {
    date: new Date(2020, 4, 20),
    title: 'Doohickey',
    price: 99.99
  }]

  return (
    <div className="App">
      <NewExpense></NewExpense>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
