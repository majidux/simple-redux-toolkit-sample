import { useState, useMemo, useCallback } from 'react';
import Child from './components/Counter';
import { useSelector } from 'react-redux';
import { RootState } from './store/types';

function App() {
  const [state, setState] = useState(0);
  const count = useSelector((state: RootState) => state.counter.value);

  const handleUseCallback = useCallback(() => {
    setState((prev) => prev + 1);
  }, []);

  const data = useMemo(() => {
    return mockData.map((i) => i + 10);
  }, []);

  return (
    <div>
      <span>{count}</span>
      <span style={{ backgroundColor: 'yellow' }}>{state}</span>
      <Child onClick={handleUseCallback} {...{ data }} />
    </div>
  );
}

export default App;

const mockData = [1, 2, 3, 4, 5, 6, 7];
