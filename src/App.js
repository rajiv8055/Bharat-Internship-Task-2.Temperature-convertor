import "./App.css";
import Temperature from "./components/temperature";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Temperature convertor</h3>
        <h4>Celsius[°C] to Fahrenheit[°F] and Viceversa</h4>
        <Temperature />
      </header>
    </div>
  );
}

export default App;
