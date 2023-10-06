import { useState } from "react";


export const useCounter = ( initialValue: number = 10 ) => {

  const [ value, setValue ] = useState<number>(initialValue);

  const accumulate = ( value: number ) => {
    setValue( prevValue => prevValue + value );
  };


  return {
    value,
    accumulate
  }

};
