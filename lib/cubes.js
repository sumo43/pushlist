import { useState, useEffect, useContext, createContext } from 'react';
import { createCube } from './createcube';
import { getCubes } from './db';

const CubesContext = createContext();

const saveCube = (name, desc, uid) => {
	setActive(false);
	const cube = createCube(name, desc, uid);
	pushCube(cube);
};
