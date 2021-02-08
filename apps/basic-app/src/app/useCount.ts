import { useState } from 'react';

export const useCount: () => [number, () => void, () => void] = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return [count, increment, decrement];
};
