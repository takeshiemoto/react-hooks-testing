import React from 'react';
import { useCount } from './useCount';

export function App() {
  const [count, increment, decrement] = useCount();
  return (
    <div>
      <h1>Hello world</h1>
      <h2>Count: {count}</h2>
      <div>Count</div>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
}

export default App;
