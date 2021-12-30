import { useState, useEffect, useContext, createContext } from 'react';
import { createCube } from './createcube';
import { getCubes } from './db';

const CubesContext = createContext();

export function ProvideCubes({ children }) {
	const newcubes = Cubes();
	return (
		<CubesContext.Provider value={newcubes}>
			{children}
		</CubesContext.Provider>
	);
}

export const useCubes = () => {
	return useContext(CubesContext);
};

function Cubes() {
	const [cubes, setCubes] = useState({});
	const uid = undefined;

	// need to do this for useeffect to work
	const setUid = (_uid) => (uid = _uid);

	useEffect(async () => {
		if (uid == undefined) {
			console.log('uid is empty, cannot load cubes');
		} else {
			let cubes = await getCubes(uid);
			setCubes({ cubes: cubes });
		}
	});

	const load = async (uid) => {};

	const save = (name, desc, uid) => {
		setActive(false);
		const cube = createCube(name, desc, uid);
		pushCube(cube);
	};

	return {
		setUid,
		cubes,
		load,
		save
	};
}
