import { Flex } from '@chakra-ui/react';
import ListItem from './listitem';
import { useCubes } from '../../lib/cubes';
import { useAuth } from '../../lib/auth';
import { getCubes } from '../../lib/db';
import { useState, useEffect, useRef } from 'react';

const CubesList = () => {
	const [cubes, setCubes] = useState([]);
	const auth = useAuth();
	const countRef = useRef(0);

	useEffect(() => {
		const snapshotHandler = (snapshot) => {
			let dat = [];
			snapshot.forEach((doc) => {
				dat.push(doc.data());
			});
			setCubes(dat);
		};
		getCubes(auth.user.uid, snapshotHandler);
	}, []);

	return (
		<Flex flexDir="column">
			{cubes.map((cube) => (
				<ListItem key={cube.last_edited} name={cube.name}></ListItem>
			))}
		</Flex>
	);
};

export default CubesList;
