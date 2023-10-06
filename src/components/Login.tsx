import { useEffect, useReducer } from "react"


interface AuthState {
  validating : boolean;
  token      : string | null;
  username   : string
  name       : string;
}

const initialState: AuthState = {
  validating : true,
  token      : null,
  username   : '',
  name       : ''
};


type LoginPayload = { username: string, name: string };

type AuthAction =
  | { type: 'logout' }
  | { type: 'login', payload: LoginPayload };


const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
  
  switch (action.type) {
    case 'logout':
      return {
        ...initialState,
        validating: false
      };

    case 'login':
      const { name, username } = action.payload;
      return {
        validating: false,
        token: 'abc132',
        name,
        username
      };
  
    default:
      return state;
  }

};


export const Login = () => {

  const [ { validating, token, username }, dispatch ] = useReducer(authReducer, initialState);

  const login = () => {
    dispatch({
      type: 'login',
      payload: { username: 'Chuli', name: 'Tomas' }
    })
  };

  const logout = () => {
    dispatch({ type: 'logout' });
  };


  useEffect(() => {
    setTimeout( logout, 1500 );
  }, []);


  return (
    <>
      <h3>Login</h3>

      {
        (validating) &&
          <div className="alert alert-info">Validating...</div>
      }

      {
        (!validating) && (token !== null) &&
          <>
            <div className="alert alert-success">Authenticated as: { username }</div>

            <button
              className="btn btn-danger"
              onClick={ logout }
            >
              Logout
            </button>
          </>
      }

      {
        (!validating) && (token === null) &&
          <>
            <div className="alert alert-danger">Not Authenticated</div>

            <button
              className="btn btn-primary"
              onClick={ login }
            >
              Login
            </button>
          </>
      }
    </>
  )
}
