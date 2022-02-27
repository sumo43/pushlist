import { useState, useEffect, useContext, createContext } from 'react';
import "./firebase"
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    getAdditionalUserInfo,
    createUserWithEmailAndPassword
} from 'firebase/auth';

const userContext = createContext();

/** 
this will be the only way to access state for the frontend functions
will contain user, full todo list, and will be the only way to interface with the firebase backend

flow:
1. the user signs in, confirmed by change in usercheck state
2. the usercheck state change triggers a request for the todo list from firebase
3. the change in liststate triggers an update of the frontend
*/

export function ProvideUser({children}) {
    const user = useProvideUser()
    return <userContext.Provider value={user}>{children}</userContext.Provider>
}

export const useUser = () => {
    return useContext(userContext)
}

const useProvideUser = () => {

    // the user is null when not set yet, "" when there is an error, otherwise is a normal object
    // 0 not logged in, 1 logged in successfully, 3 error
    const [userCheck, setUsercheck] = useState(0)
    const [user, setUser] = useState(null)
    const [listCheck, setListCheck] = useState(0)
    const [list, setList] = useState([])
    const auth = getAuth()


    const signin = async () => {
        const provider = new GoogleAuthProvider()
        try {
            const result = await signInWithPopup(auth, provider)
            setUsercheck(1)
            setUser(result.user)
        }
        catch(exception) {
            setUsercheck(2)
            return
        }
    }

    const signout = async () => {
        const res = await signOut(auth)
        setUsercheck(0)
    }

    return {
        userCheck,
        user,
        listCheck,
        list,
        signin,
        signout
    }
}



const auth = () => {



}