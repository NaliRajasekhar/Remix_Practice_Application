import React, { useState } from 'react';
import { redirect } from '@remix-run/node';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '~/components/NewNote/NewNote.css';
import { validateform } from '~/components/Validations/validations';
import {
    Link,
    Form,
    useActionData,
    useFormAction,
    useFetcher,
    useRouteLoaderData,
    useTransition as useNavigation,
} from '@remix-run/react';
import { addUsers } from '~/utils/Api_Calls';

import { useBeforeUnload } from "@remix-run/react";
import { useSearchParams } from "@remix-run/react";
function AddUserPage2({ users }) {

    const fetcher = useFetcher();
    const data = useActionData();
    const action = useFormAction();
    const destroyAction = useFormAction("destroy");

    const handleDestroy = async () => {
        alert('djjhsjdhsb')
        // const response = await fetch(destroyAction, {
        //   method: 'DELETE',
        // });
    };
    
    const [searchParams, setSearchParams] = useSearchParams(users);
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    const [showPassword, setShowPassword] = useState(true);
    const [state, setState] = React.useState(null);

    const [value, setValue] = React.useState("");

    // Block navigating elsewhere when data has been entered into the input
    // const blocker = useBlocker(
    //     ({ currentLocation, nextLocation }) =>
    //         value !== "" &&
    //         currentLocation.pathname !== nextLocation.pathname
    // );

    // useBeforeUnload(
    //     React.useCallback(() => {
    //         localStorage.stuff = state;
    //     }, [state])
    // );


    // React.useEffect(() => {
    //     if (state === null && localStorage.stuff != null) {
    //         setState(localStorage.stuff);
    //     }
    // }, [state]);
    // function CartCount({ count }) {
    //     const fetcher = useFetcher({ key: "add-to-bag" });
    //     const inFlightCount = Number(
    //       fetcher.formData?.get("quantity") || 0
    //     );
    //     const optimisticCount = count + inFlightCount;

    return (
        <div>
            <fetcher.Form method="post" id="note-form" action="/adduserpage">
                <p>
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" id="title" name="first_name" defaultValue={users ? users.first_name : ""}
                        style={{ borderColor: data?.error["first_name" && "red"] }} />
                    <div>{data?.error["first_name"]}</div>
                </p>
                <p>
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" id="title" name="last_name" defaultValue={users ? users.last_name : ""}
                        style={{ borderColor: data?.error["last_name" && "red"] }} />
                    <div>{data?.error["last_name"]}</div>
                </p>
                <p>
                    <label htmlFor="title">E-Mail</label>
                    <input type="text" id="title" name="email" defaultValue={users ? users.email : ""}
                        style={{ borderColor: data?.error["email" && "red"] }} />
                    <div>{data?.error["email"]}</div>
                </p>
                {/* <p>
          <label htmlFor="title">Password</label>
          <input type="text" id="title" name="password" defaultValue={users ? users.password : ""} required />
        </p> */}
                <div className="password-input">
                    <label htmlFor="title">Password</label>
                    <input type={showPassword ? 'text' : 'password'} name="password" defaultValue={users ? users.password : ""}
                        style={{ borderColor: data?.error["password" && "red"] }} />
                    <FontAwesomeIcon icon={faEye} className='eye_icon' onClick={() => setShowPassword(!showPassword)} />
                    <div>{data?.error["password"]}</div>

                </div>
                <div className="form-actions">
                    {users ? (
                        <button disabled={isSubmitting}>
                            {isSubmitting ? 'Updating...' : 'Update User'}
                        </button>) :
                        (
                            <button disabled={isSubmitting}>
                                {isSubmitting ? 'Adding...' : 'Add User'}
                            </button>
                        )
                    }

                </div>
                <button onClick={handleDestroy}>Destroy Data</button>
                <button
                    onClick={() => {
                        setSearchParams((prev) => {
                            prev.set(users ? users.password : "", "PasswordIsVishal");
                            return prev;

                        });
                    }}
                >SearchParams</button>


                {/* <span>{optimisticCount}</span> */}

            </fetcher.Form>

            {/* 
            {blocker.state === "blocked" ? (
                <div>
                    <p>Are you sure you want to leave?</p>
                    <button onClick={() => blocker.proceed()}>
                        Proceed
                    </button>
                    <button onClick={() => blocker.reset()}>
                        Cancel
                    </button>
                </div>
            ) : null} */}
        </div>
    );
}

export default AddUserPage2;

export function links() {
    return [{ rel: 'stylesheet', href: styles }];
}

// export async function action({ request }) {
//     const adduserdata = await request.formData();
//     const userdata = Object.fromEntries(adduserdata);
//     try {
//         const data = await validateform(userdata);
//         await addUsers(data);
//         return redirect('/users');
//     } catch (error) {
//         console.log('error message', error.message);
//         return { error };
//     }
// }
