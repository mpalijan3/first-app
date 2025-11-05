import { nanoid } from 'nanoid';
import { useState } from 'react';
import add, { multiply } from "./library/math.js";
import { truncate } from './library/string.js';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const id = nanoid();
  const sum = add(1, 2);
  const dugiTekst = "Ovo je jako dugi tekst koji treba skratiti";

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React {"<"} {id}</h1>
      <div>
        <h1>Primjer math funkcija:</h1>
        <p>Zbroj: 1 + 2 = {add(1, 2)}</p>
        <p>Umnožak: 3 × 4 = {multiply(3, 4)}</p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
      <h1>Primjer truncate funkcije:</h1>
      <p>Original: {dugiTekst}</p>
      <p>Skraćeno: {truncate(dugiTekst, 20, '...')}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App