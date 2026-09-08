import './components/ExpenseItem.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const data = [{
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
      <ExpenseItem data={data[0]}/>
      <ExpenseItem data={data[1]}/>
    </div>
  );
}

export default App;
