import { Link, useActionData } from "@remix-run/react";
// import Textfield from "~/components/Textfield/textfield";
import { Form } from "@remix-run/react";
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '~/components/NewNote/NewNote.css';
import { useState } from "react";
// export async function action({request}) {
//   const adduserdata = await request.formData ();
//    const userdata = Object.fromEntries (adduserdata);

//   try {
//     const newuserdata = await validateform (userdata);
//     await addUsers (newuserdata);
//     return redirect ('/users');
//   } catch (error) {
//   console.log ('error message', error.message);  
//     return {error};
//   }

// }

// export async function loader() {
//   const notes = await getStoredNotes();

//   if (!notes || notes.length === 0) {
//     throw json(
//       { message: 'Could not find any notes.' },
//       {
//         status: 404,
//         statusText: 'Not Found',
//       }
//     );
//   }
//   return notes;
// }
export default function Login() {
  const initialState = {
    email: "",
    password: ""
  }
  const actiondata = useActionData();
  const [formData, setFormdata] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e, field) => {
    // setFormdata(...formData, {[e.target.name]:e.target.value})
    setFormdata({ ...formData, [e.target.name]: e.target.value })


  }
  return (
    <>
      <Form method="post" id="note-form" >
        <h2 className="login">Login</h2>
        <p>
          <label htmlFor="title">E-Mail</label>
          <input type="text" id="title" name="email"
          />
        </p>
        <div className="password-input">
          <label htmlFor="title">Password</label>
          <input type={showPassword ? 'text' : 'password'} name="password"
          />
          <FontAwesomeIcon icon={faEye} className='eye_icon' onClick={() => setShowPassword(!showPassword)} />
        </div>
        <div className="form-actions">
          <button >
            Login
          </button>

        </div>
        <p className="text-gray-600">Dont have an account?<Link to="/adduserpage">Signup</Link></p>

      </Form>

    </>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}
