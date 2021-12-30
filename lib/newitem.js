import { useState, useEffect, useContext, createContext } from 'react';
import { createCube } from './createcube';
import { pushCube } from './db';
// we are using this context for all the components below

const newItemContext = createContext();

export function ProvideNewItem({ children }) {
	const newitem = NewItem();
	return (
		<newItemContext.Provider value={newitem}>
			{children}
		</newItemContext.Provider>
	);
}

export const useNewItem = () => {
	return useContext(newItemContext);
};

function NewItem() {
	const [active, setActive] = useState(false);

	const save = (name, desc, uid) => {
		setActive(false);
		const cube = createCube(name, desc, uid);
		pushCube(cube);
	};

	return {
		active,
		save,
		setActive
	};
}
