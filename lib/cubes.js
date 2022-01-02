import { useState, useEffect, useContext, createContext } from 'react';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
	getAdditionalUserInfo,
	createUserWithEmailAndPassword
} from 'firebase/auth';
import { useAuth } from './auth';
import { getCubes } from './db';

const cubesContext = createContext();

export function ProvideCubes({ children }) {
	const cubes = useProvideCubes();
	return (
		<cubesContext.Provider value={cubes}>{children}</cubesContext.Provider>
	);
}

export const useCubes = () => {
	return useContext(cubesContext);
};

function useProvideCubes() {
	const [cubes, setCubes] = useState([]);
	const [count, setCount] = useState(0);
	const auth = useAuth();

	const getCubeById = (id) => {
		for (let i = 0; i < cubes.length; i++) {
			if (cubes[i].id == id) {
				return cubes[i];
			}
		}

		return undefined;
	};

	if (auth.user.uid) {
		if (count != 1) {
			const snapshotHandler = (snapshot) => {
				let dat = [];
				snapshot.forEach((doc) => {
					let curr_data = doc.data();
					curr_data['id'] = doc.id;
					dat.push(curr_data);
				});
				setCubes(dat);
			};
			getCubes(auth.user.uid, snapshotHandler);
			setCount(1);
		}
	}

	return {
		cubes,
		setCubes,
		getCubeById
	};
}
