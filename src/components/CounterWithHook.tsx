import { useCounter } from '../hooks';


export const CounterWithHook = () => {

  const { value, accumulate } = useCounter(100);


  return (
    <>
      <h3>Counter with hook: <small>{ value }</small></h3>

      <button
        className="btn btn-primary"
        onClick={ () => accumulate(1) }
      >
        +1
      </button>
      &nbsp;
      <button
        className="btn btn-primary"
        onClick={ () => accumulate(-1) }
      >
        -1
      </button>
    </>
  )
}
