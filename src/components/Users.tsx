import { useUsers } from '../hooks';
import { User } from '../interfaces';


export const Users = () => {

  const { users, previousPage, nextPage } = useUsers();
  

  const renderUser = ({ id, avatar, first_name, last_name, email }: User) => (
    <tr key={ id.toString() }>
      <td>
        <img
          src={ avatar }
          alt={ first_name }
          style={{ width: 40, borderRadius: 100 }}
        />
      </td>
      <td>{ first_name } { last_name }</td>
      <td>{ email }</td>
    </tr>
  );

  return (
    <>
      <h3>Users: </h3>

      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          { users.map( renderUser ) }
        </tbody>
      </table>


      <button
        className="btn btn-primary"
        onClick={ previousPage }
      >
        Previous
      </button>

      &nbsp;

      <button
        className="btn btn-primary"
        onClick={ nextPage }
      >
        Next
      </button>
    </>
  )
}
