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

const pushCube = async (cube) => {
    const col = collection(client, "cubes");
    addDoc(col, cube);
};

const getTodosDB = async (uid, snapshotHandler) => {
    const col = collection(client, "todos");
    const q = query(
        col,
        where("uid", "==", uid, orderBy("time_created", "asc"))
    );
    const docs = await getDocs(q);
    const arr = [];
    docs.forEach((doc) => arr.push(doc.data()));
    return arr;
};

const saveCube = (name, desc, uid, setActive) => {
    setActive(false);
    const cube = createCube(name, desc, uid);
    pushCube(cube);
};

const createTodo = (name, desc, uid) => {
    const cube = {
        name,
        desc,
        uid,
    };
    const curr_time = new Date().toISOString();
    const curr_time_millis = Date.now();
    cube.time_created = curr_time_millis;
    cube.time_human = curr_time;
    return cube;
};

const pushTodoDB = (uid, data) => {
    const col = collection(client, "todos");
    const document = addDoc(col, data, { merge: true });
};

export { addUser, getTodosDB, createTodo, pushTodoDB };
