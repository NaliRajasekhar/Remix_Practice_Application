import bootstrapCSS from "bootstrap/dist/css/bootstrap.min.css";
import { useRouteLoaderData, useLocation, useFetcher, Form } from "@remix-run/react";
function dashboard() {
    const fetcher = useFetcher();

    //  const {users} = useRouteLoaderData("routes/users");
    
    const location = useLocation();
    console.log('location', location);
    // console.log('usersData', users);

    const count = 1;
    const CartCount = () => {
        const fetcher = useFetcher({ key: "add-to-bag" });
        const inFlightCount = Number(
            fetcher.formData?.get("quantity") || 0
        );
        const optimisticCount = count + inFlightCount;
        console.log("optimisticCount", optimisticCount)
    }


    return (
        <>
            <div class="card" >
                <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" class="card-img-top" alt="..." ></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

            {/* <fetcher.Form method="post" action>
                <button onClick={CartCount}>DataCount</button>
            </fetcher.Form> */}
            
            {/* {optimisticCount && (
                <span>{optimisticCount}</span>
            )} */}
        </>
    )
}

export default dashboard

export const links = () => [{ rel: "stylesheet", href: bootstrapCSS }];
