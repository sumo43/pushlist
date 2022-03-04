import { useState, useEffect, useContext, createContext } from "react";
import "./firebase";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    getAdditionalUserInfo,
    createUserWithEmailAndPassword,
} from "firebase/auth";

import { getDocs } from "firebase/firestore";
import { addUser, getTodosDB, pushTodoDB } from "./db";

const userContext = createContext();

/** 
this will be the only way to access state for the frontend functions
will contain user, full todo list, and will be the only way to interface with the firebase backend

flow:
1. the user signs in, confirmed by change in usercheck state
2. the usercheck state change triggers a request for the todo list from firebase
3. the change in liststate triggers an update of the frontend
*/

export function ProvideUser({ children }) {
    const user = useProvideUser();
    return <userContext.Provider value={user}>{children}</userContext.Provider>;
}

export const useUser = () => {
    return useContext(userContext);
};

const useProvideUser = () => {
    // the user is null when not set yet, "" when there is an error, otherwise is a normal object
    // 0 not logged in, 1 logged in successfully, 3 error
    const [userCheck, setUsercheck] = useState(0);
    const [user, setUser] = useState(null);
    const [listCheck, setListCheck] = useState(0);
    const [list, setList] = useState([]);
    const [currentTodo, setCurrentTodo] = useState(undefined);
    const auth = getAuth();

    const pushTodo = (uid, data) => {
        pushTodoDB(uid, data);
    };

    const getTodos = async () => {
        if (userCheck == 1) {
            const arr = await getTodosDB(user.uid, undefined);
            setList(arr);
            // this is stupid
            const len = arr.length - 1;
            arr = arr.reverse();
            setCurrentTodo(arr[len]);
            setListCheck(1);
        }
    };

    const setUserInFirebase = async (user) => {
        const uid = user.uid;
        const user_obj = Object();
        user_obj.uid = uid;
        user_obj.displayName = user.displayName;
        user_obj.email = user.email;
        addUser(uid, user_obj);
        return;
    };

    const signin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            //const fb_result = await setUserInFirebase(result.user);
            const user = result.user;
            setUser(user);
            setUsercheck(1);
            setUserInFirebase(user);
        } catch (exception) {
            setUsercheck(2);
            return;
        }
    };

    const getList = async () => {};

    const signout = async () => {
        const res = await signOut(auth);
        setUsercheck(0);
        setUser(null);
    };

    return {
        pushTodo,
        getTodos,
        currentTodo,
        userCheck,
        user,
        listCheck,
        list,
        signin,
        signout,
    };
};
