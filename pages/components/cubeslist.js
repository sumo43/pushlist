import { Flex } from '@chakra-ui/react';
import ListItem from './listitem';
import { useCubes } from '../../lib/cubes';
import { useAuth } from '../../lib/auth';
import { useEffect } from 'react';

const CubesList = () => {
	const cubes = useCubes();
	const auth = useAuth();

	cubes.setUid(auth.user.uid);
	const cubes_list = [];

	useEffect(() => {
		cubes_list = cubes.cubes;
	});

	const updateCubesList = () => {
		cubes_list = cubes.cubes.map((cube) => {
			return <ListItem>{cube.name}</ListItem>;
		});
	};

	useEffect(() => {
		updateCubesList;
	});

	return <Flex>{cubes_list}</Flex>;
};

export default CubesList;
