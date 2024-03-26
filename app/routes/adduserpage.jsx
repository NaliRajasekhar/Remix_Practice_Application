import React from 'react';
import { redirect } from '@remix-run/node';

import styles from '~/components/NewNote/NewNote.css';
import {
  Link,
  Form,
  useActionData,
  useTransition as useNavigation,
} from '@remix-run/react';

import { addUsers } from '~/utils/Api_Calls';

function AddUserPage({ users }) {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <div>
      <Form method="post" id="note-form" >
        <p>
          <label htmlFor="first_name">First Name</label>
          <input type="text" id="title" name="first_name" defaultValue={users ? users.first_name : ""} required />
        </p>
        <p>
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id="title" name="last_name" defaultValue={users ? users.last_name : ""} required />
        </p>
        <p>
          <label htmlFor="title">E-Mail</label>
          <input type="text" id="title" name="email" defaultValue={users ? users.email : ""} required />
        </p>
        <div className="form-actions">
          {users ?(
              <button disabled={isSubmitting}>
              {isSubmitting ? 'Updating...' : 'Update User'}
            </button>):
            (
              <button disabled={isSubmitting}>
              {isSubmitting ? 'Adding...' : 'Add User'}
            </button>
            )
          }
        
        </div>

      </Form>
    </div>
  );
}

export default AddUserPage;

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export async function action({ request }) {
  const adduserdata = await request.formData();
  const userdata = Object.fromEntries(adduserdata);
    await addUsers(userdata);
  return redirect('/users');
}
