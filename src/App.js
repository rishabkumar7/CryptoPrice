import './App.css';

function App() {
  return (
    <div>
      <div className="header">
        <h1 className="brand">
          <i className="fas fa-dollar-sign"></i> CoinPrice
        </h1>
        <form>
          <input
            className="inputField"
            type="text"
            //onChange={handleChange}
            placeholder="Search a Coin"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
