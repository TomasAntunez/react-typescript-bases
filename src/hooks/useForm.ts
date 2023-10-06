import { useState } from "react";


export const useForm = <T extends Object>( initialState: T ) => {

  const [ state, setState ] = useState(initialState);

  const onChange = ( field: keyof T, value: string ) => {
    setState( prevState => ({
      ...prevState,
      [field]: value
    }));
  };


  return { ...state, onChange };

};
