import { useRef, useState } from "react"
import { URLS } from "../utils/constants";
import { validateFormFields } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from "../server/firebase";
import Header from "./Header"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
        if(validation) return;

        if(!isSignInForm) {
            //sign up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                // Signed up 
                updateProfile(user, {
                    displayName: name.current.value,
                  }).then(() => {
                    const { uid, email, displayName } = auth.currentUser;
                    dispatch(addUser({ uid, email, displayName }));
                    setIsSignInForm(true);
                  }).catch((error) => {
                    setErrorMessage(error.message);
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " - " + errorMessage);
            })

        } else {
            //sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate('/browse');

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " - " + errorMessage);
            });
        }
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
                <button className="p-2 mx-2 my-4 w-full bg-red-700 rounded-lg" onClick={handleButtonClick}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <p className="mx-2 my-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already a member? Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login;