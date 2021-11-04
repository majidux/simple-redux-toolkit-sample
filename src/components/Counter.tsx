import { memo, Children } from 'react';
import { useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../store/counter/slice';

function Counter(props: any) {
  const { onClick, data } = props;
  const dispatch = useDispatch();

  console.log('render Child');

  return (
    <div
      style={{
        backgroundColor: 'pink',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '60vh',
      }}
    >
      <button {...{ onClick }}>press</button>
      {Children.map(data, (item: any) => (
        <span>{item}</span>
      ))}

      <div
        style={{
          backgroundColor: 'lightgreen',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <button
          aria-label='Increment value'
          onClick={() => dispatch(incrementByAmount(10))}
        >
          incrementByAmount
        </button>
        <button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default memo(Counter);
