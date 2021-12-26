import firebase from './firebase';
import client from './firestore';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';

const createUser = async (uid, data) => {
	const col = collection(client, 'users');
	const doc_ref = doc(client, 'users', uid);
	const document = setDoc(doc_ref, { uid: data }, { merge: true });
};

export default createUser;
