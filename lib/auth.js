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
import { createUser } from './db';
// we are using this context for all the components below

const authContext = createContext();

export function ProvideAuth({ children }) {
	const auth = useProvideAuth();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
	return useContext(authContext);
};

function useProvideAuth() {
	const [user, setUser] = useState('');
	const auth = getAuth();

	const handleUser = (rawUser) => {
		if (rawUser) {
			const user = formatUser(rawUser);
			setUser(user);
			createUser(user.uid, user);
			return user;
		} else {
			setUser(false);
			return false;
		}
	};

	const formatUser = (user) => {
		return {
			uid: user.uid,
			email: user.email,
			name: user.displayName,
			imageURL: user.photoURL,
			provider: user.providerData[0].providerId
		};
	};

	const signin = () => {
		const provider = new GoogleAuthProvider();
		return signInWithPopup(auth, provider).then((response) => {
			return handleUser(response.user);
		});
	};

	const signout = () => {
		return signOut(auth).then(() => {
			handleUser(false);
		});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			handleUser(user);
		});

		return () => unsubscribe();
	}, []);

	return {
		user,
		signin,
		signout,
		setUser
	};
}

const getFromQueryString = (key) => {
	return queryString.parse(window.location.search)[key];
};
