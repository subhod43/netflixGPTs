import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../server/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/slices/userSlice";

const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        }
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const { uid, email, displayName } = user;
              dispatch(addUser({ uid, email, displayName }));
            } else {
              dispatch(removeUser());
            }
          });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;