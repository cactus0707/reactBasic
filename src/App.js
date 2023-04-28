import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 294.67,
      date: new Date(2023, 4, 8),
    },
    {
      id: "e2",
      title: "New Tv",
      amount: 693.67,
      date: new Date(2023, 4, 8),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 524.67,
      date: new Date(2023, 4, 18),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 194.67,
      date: new Date(2023, 4, 28),
    },
  ];
  return (
    <div className="App">
      <h1>Let's get started</h1>
      <Expenses item={expenses}></Expenses>
    </div>
  );
}

export default App;
