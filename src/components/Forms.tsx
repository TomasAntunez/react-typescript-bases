import { useForm } from '../hooks';


export const Forms = () => {

  const { email, password, onChange } = useForm({ email: '', password: '' });


  return (
    <>
      <h3>Forms</h3>

      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={ email }
        onChange={ ({ target }) => onChange('email', target.value) }
      />
      <input
        type="text"
        className="form-control mt-2 mb-2"
        placeholder="Password"
        value={ password }
        onChange={ ({ target }) => onChange('password', target.value) }
      />

      <code>
        <pre>{ JSON.stringify({ email, password }, null, 2) }</pre>
      </code>
    </>
  )
}
