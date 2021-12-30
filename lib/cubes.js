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

	const save = (name, desc, uid) => {
		setActive(false);
		const cube = createCube(name, desc, uid);
		pushCube(cube);
	};

	return {
		setCubes,
		cubes,
		save
	};
}
