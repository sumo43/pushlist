import firebase from "./firebase";
import client from "./firestore";
import {
    collection,
    doc,
    getDoc,
    setDoc,
    query,
    where,
    Query,
    addDoc,
    getDocs,
    onSnapshot,
    orderBy,
    deleteDoc,
} from "firebase/firestore";

const addUser = async (uid, data) => {
    const col = collection(client, "users");
    const doc_ref = doc(client, "users", uid);
    const document = setDoc(doc_ref, { uid: data }, { merge: true });
};

/** - just use push for the moment
 * - the cube name is the name of the cube
 * cube: {
 *         id: '',
 *         name: '',
 *         labels: [],
 *         cube_state: []
 *         timestamp: ''
 *         last_edited: ''
 * }
 */

const getTodosDB = async (uid) => {
    const col = collection(client, "todos");
    const q = query(
        col,
        where("uid", "==", uid),
        orderBy("time_created", "desc")
    );
    const docs = await getDocs(q);
    const arr = [];
    docs.forEach((doc) => {
        const data = doc.data();
        data.id = doc.id;
        arr.push(data);
    });
    return arr;
};

const deleteTodoDB = async (id) => {
    await deleteDoc(doc(client, "todos", id));
    return;
};

const createTodo = (name, desc, uid) => {
    const todo = {
        name,
        desc,
        uid,
    };
    const curr_time = new Date().toISOString();
    const curr_time_millis = Date.now();
    todo.time_created = curr_time_millis;
    todo.time_human = curr_time;
    return todo;
};

const pushTodoDB = async (data, callbackHandler) => {
    const col = collection(client, "todos");
    const document = await addDoc(col, data, { merge: true });
    callbackHandler();
};

export { addUser, getTodosDB, createTodo, pushTodoDB, deleteTodoDB };
