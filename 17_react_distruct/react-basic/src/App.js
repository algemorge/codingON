import './App.css';

// App = Component
// return 으로 감싸기 
function App() {
  const onClick = () => {
    console.log('abc');
  }
  return (
    <div className="App" style={{ backgroundColor: 'black' }} >
      <header className="App-header">
        <p onClick={onClick}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
