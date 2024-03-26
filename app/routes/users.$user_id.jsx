import AddUserPage from "./adduserpage.jsx";
import { useLoaderData } from '@remix-run/react';
import { redirect } from '@remix-run/node';
import { getOneUser, addUsers, updateUsers } from '~/utils/Api_Calls.js';
import styles from '~/components/NewNote/NewNote.css';


const editUser = () => {
    const users = useLoaderData();
    return (
        <AddUserPage users={users} />
    )
}
export default editUser;

export async function loader({ params }) {
    const users = await getOneUser(params.user_id);
return users;
}

export async function action({ request, params }) {
    const adduserdata = await request.formData();
    const userdata = Object.fromEntries(adduserdata);
    if (!params.user_id) {
        await addUsers(userdata);
    } else {
        let res = await updateUsers(userdata, params.user_id)
    }
    return redirect('/users');
}

export function links() {
    return [{ rel: 'stylesheet', href: styles }];
}