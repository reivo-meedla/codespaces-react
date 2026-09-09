import Expenses from './components/Expenses';

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
      <Expenses items={data}/>
    </div>
  );
}

export default App;
