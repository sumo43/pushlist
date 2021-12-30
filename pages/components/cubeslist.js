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
		const updateCubesData = async () => {
			const firebase_cubes_data = [1, 2, 3];
			const cubeslist = firebase_cubes_data.map((cube) => {
				<ListItem>cube</ListItem>;
			});
			setCubes(cubeslist);
			console.log(cubes);
			countRef++;
		};
		updateCubesData();
	}, []);

	return <Flex>{cubes}</Flex>;
};

export default CubesList;
