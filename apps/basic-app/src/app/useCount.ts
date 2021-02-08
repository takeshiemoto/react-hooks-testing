import { useState } from 'react';
import { random } from './utils';

export const useCount = (): {
  count: number;
  decrement: () => void;
  increment: () => void;
} => {
  const [count, setCount] = useState(random(10));

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return {
    count,
    increment,
    decrement,
  };
};
