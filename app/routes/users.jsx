import styles from '~/components/Notelist/NoteList.css';
import { useLoaderData } from '@remix-run/react';
import { getAllUsers,deleteUsers } from '~/utils/Api_Calls';
import { Link } from '@remix-run/react';
import { useNavigate } from '@remix-run/react';
function UsersLIst() {

  const users = useLoaderData();
  const navigate = useNavigate();
  const handleEditUser=(id)=>{
    navigate(`/users/${id}`)
  }

  const handleDeleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user record ?")) {
      try {
        const res = await deleteUsers(id);
        navigate('/users')
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };
  
  return (
    <div>
      <h2 className="UsersHeading">List Of All Users</h2>
      <div className='bodybtn'>
        <Link to='/adduserpage'><buton className="adduserbtn">Add User</buton></Link>
      </div>

      <ul id="note-list">
        {users && users.map((users, index) => (   
          <li key={users.id} className="note" >
            {/* <Link to={users.id}> */}
              <article>
                <header>
                  <ul className="note-meta">
                    <li>{users.first_name}</li>
                    <li>
                      {users.gender}
                    </li>
                  </ul>
                  <p>{users.email}</p>
                  <Link to={users.id}>
                  <img onClick={()=>handleEditUser(users.id)} className="edit_icon" src="/imgs/edit-icon.png" alt="Edit Icon"/>
                  </Link>
                  <img onClick={()=>handleDeleteUser(users.id)} className="delete_icon" src="/imgs/delete-icon.png" alt="Edit Icon"/>
                </header>
                <p>{users.password}</p>
              </article>
            {/* </Link> onClick={()=>handleEditUser(users.id)}*/}
          </li>
        ))}
      </ul>
    </div>

  );
}
export default UsersLIst;

export async function loader() {
  const users = await getAllUsers();
  return users;
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}
