import React,{useState} from 'react';
import { redirect } from '@remix-run/node';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '~/components/NewNote/NewNote.css';

import {
  Link,
  Form,
  useActionData,
  useTransition as useNavigation,
} from '@remix-run/react';
import { addUsers } from '~/utils/Api_Calls';
import * as yup from 'yup';

const validateform = async (userdata) => {
  const getValidationErrors = (error) => {
    const validationErrors = {};
    error.inner.forEach (error => {
      if (error.path) {
        validationErrors[error.path] = error.message;
      }
    });
    return validationErrors;
  };

  const schema = yup.object ().shape ({
    first_name: yup.string ().required ('First name is required').nullable (),
    last_name: yup.string ().required ('Last name is required').nullable (),
    password: yup.string ().required ('Password is required').nullable (),
    email: yup
      .string ()
      .email ('Please enter a valid email')
      .required ('Email is required')
  });

  try {
    const project = await schema.validate(userdata, {abortEarly:false});
    return project;
  } catch (error) {
    throw getValidationErrors (error);
  }
};

function AddUserPage({ users }) {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
const [showPassword, setShowPassword] = useState(false);


  return (
    <div>
      <Form method="post" id="note-form" >
        <p>
          <label htmlFor="first_name">First Name</label>
          <input type="text" id="title" name="first_name" defaultValue={users ? users.first_name : ""}
           style={{borderColor:data?.error["first_name" && "red"]}} />
           <div>{data?.error["first_name"]}</div> 
        </p>
        <p>
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id="title" name="last_name" defaultValue={users ? users.last_name : ""}
           style={{borderColor:data?.error["last_name" && "red"]}} />
           <div>{data?.error["last_name"]}</div>
        </p>
        <p>
          <label htmlFor="title">E-Mail</label>
          <input type="text" id="title" name="email" defaultValue={users ? users.email : ""} 
           style={{borderColor:data?.error["email" && "red"]}} />
           <div>{data?.error["email"]}</div>
        </p>
        {/* <p>
          <label htmlFor="title">Password</label>
          <input type="text" id="title" name="password" defaultValue={users ? users.password : ""} required />
        </p> */}
        <div className="password-input">
        <label htmlFor="title">Password</label>
      <input type={showPassword ? 'text' : 'password'} name="password" defaultValue={users ? users.password : ""} 
       style={{borderColor:data?.error["email" && "red"]}} />
           <div>{data?.error["email"]}</div>
      <FontAwesomeIcon icon={faEye} className='eye_icon' onClick={() => setShowPassword(!showPassword)} />
    </div>
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
  try {
    const newuserdata = await validateform (userdata);
    await addUsers (newuserdata);
    return redirect ('/users');
  } catch (error) {
  console.log ('error message', error.message);  
    return {error};
  }
}
