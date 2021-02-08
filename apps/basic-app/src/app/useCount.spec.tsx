import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import { useCount } from './useCount';

describe('useCount', () => {
  test('初期値は0である必要があります', () => {
    const { result } = renderHook(() => useCount());
    expect(result.current.count).toEqual(0);
  });

  test('インクリメントされる必要があります', () => {
    const { result } = renderHook(() => useCount());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toEqual(1);
  });

  test('デクリメントされる必要があります', () => {
    const { result } = renderHook(() => useCount());

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toEqual(-1);
  });
});
