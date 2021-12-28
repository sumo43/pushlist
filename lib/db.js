import firebase from './firebase';
import client from './firestore';
import {
	collection,
	doc,
	getDoc,
	setDoc,
	query,
	where,
	Query,
	addDoc
} from 'firebase/firestore';

const createUser = async (uid, data) => {
	const col = collection(client, 'users');
	const doc_ref = doc(client, 'users', uid);
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
	const col = collection(client, 'cubes');
	addDoc(col, cube);
};

const getCubes = async (uid) => {
	const query = query(client, 'cubes', where('uid', '==', uid));
	query.forEach((doc_snapshot) => {
		console.log(doc_snapshot.data());
	});
};

export { createUser, pushCube, getCubes };
