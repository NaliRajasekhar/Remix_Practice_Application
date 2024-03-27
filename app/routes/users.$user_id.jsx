import AddUserPage from './adduserpage.jsx';
import {useLoaderData} from '@remix-run/react';
import {redirect} from '@remix-run/node';
import {getOneUser, addUsers, updateUsers} from '~/utils/Api_Calls.js';
import styles from '~/components/NewNote/NewNote.css';
import { validateform } from '~/components/Validations/validations';

const editUser = () => {
  const users = useLoaderData ();
  return <AddUserPage users={users} />;
};
export default editUser;

export async function loader({params}) {
  const users = await getOneUser (params.user_id);
  return users;
}

export async function action({request, params}) {
  const adduserdata = await request.formData ();
  const userdata = Object.fromEntries (adduserdata);
  if (!params.user_id) {
    await addUsers (userdata);
  } else {
    try {
        const newuserdata = await validateform (userdata);
        let res = await updateUsers (newuserdata, params.user_id);
      } catch (error) {
      console.log ('update error message', error.message);  
        return {error};
      }
  }
  return redirect ('/users');
}

export function links () {
  return [{rel: 'stylesheet', href: styles}];
}
