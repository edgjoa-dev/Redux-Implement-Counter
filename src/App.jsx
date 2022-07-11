import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './store/slice/counter';
import logo from './logo.svg'
import './App.css'

function App() {
  const { counter } = useSelector( state => state.counter );
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button
          type="button"
          onClick={() => dispatch(increment())}>
            incrementar: {counter}
          </button>
        </p>
        <p>
          <button type="button" onClick={() => dispatch(decrement())}>
            reducir: {counter}
          </button>
        </p>
        <p>
          <button type="button" onClick={() => dispatch(incrementByAmount(2))}>
            Add by 2: {counter}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
