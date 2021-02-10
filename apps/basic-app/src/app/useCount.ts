import { useCallback, useState } from 'react';
import { random } from './utils';

export const useCount = (): {
  count: number;
  decrement: () => void;
  increment: () => void;
} => {
  const [count, setCount] = useState(random(10));

  const increment = useCallback(() => setCount(count + 1), [count]);
  const decrement = useCallback(() => setCount(count - 1), [count]);

  return {
    count,
    increment,
    decrement,
  };
};
