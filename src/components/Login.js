import { useRef, useState } from "react"
import Header from "./Header"
import { URLS } from "../utils/constants";
import { validateFormFields } from "../utils/validate";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const confirmPassword = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        //validate form fields
        const validation = validateFormFields(email.current.value, password.current.value, name?.current?.value, confirmPassword?.current?.value, isSignInForm);
        setErrorMessage(validation);
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={URLS.backgroundImage}
                alt="netflix-background" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="absolute p-12 w-3/12 bg-black text-white my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-85">
                <h1 className="font-bold text-3xl p-2">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                { !isSignInForm && <input ref={name} type="text" placeholder="Name" className="p-2 m-2 w-full rounded-md bg-gray-800" />}
                <input ref={email} type="text" placeholder="Email Address" className="p-2 m-2 w-full rounded-md bg-gray-800" />
                <input ref={password} type="password" placeholder="Password" className="p-2 m-2 w-full rounded-md bg-gray-800" />
                { !isSignInForm && <input ref={confirmPassword} type="password" placeholder="Confirm Password" className="p-2 m-2 w-full rounded-md bg-gray-800" />}
                <p className="text-red-400 text-lg font-bold px-2">{errorMessage}</p>
                <button className="p-2 mx-2 my-4 w-full bg-red-700 rounded-lg" onClick={handleButtonClick}>Sign In</button>
                <p className="mx-2 my-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already a member? Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login