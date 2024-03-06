import { useDispatch, useSelector } from 'react-redux';
import {
   decrement,
   increment,
   incrementByAmount,
} from '../store/slices/counter';

const Counter = () => {
   const { counter } = useSelector((state) => state.counter);
   const dispatch = useDispatch();
   return (
      <div>
         <h1>Counter</h1>
         <p>Il conteggio è {counter}</p>
         <button
            type="button"
            className="btn btn-success text-size-3"
            onClick={() => dispatch(increment())}
         >
            +
         </button>

         <button
            type="button"
            className="btn btn-danger text-size-3"
            onClick={() => dispatch(decrement())}
         >
            -
         </button>

         <button
            type="button"
            className="btn btn-warning text-size-3"
            onClick={() => dispatch(incrementByAmount(3))}
         >
            +3
         </button>
      </div>
   );
};

export default Counter;
