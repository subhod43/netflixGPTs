import { signOut } from "firebase/auth";
import { URLS } from "../utils/constants";
import { auth } from "../server/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/slices/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  useEffect(() => {
    const unsubscribe =onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName } = user;
          dispatch(addUser({ uid, email, displayName }));
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      });
      return () => unsubscribe();
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log(error);
    });  
  }

  return (
    <div className="absolute w-screen flex justify-between px-4 py-2 bg-gradient-to-b from-black z-10">
        <img className="w-48" src={URLS.headerLogo} 
        alt="netlfix_logo" />

        {user && <div className="flex p-4">
          <img className="w-12 h-12" src={URLS.userIcon} alt="user icon" />
          <button className="mx-2 font-bold text-white" onClick={handleSignOut}>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header