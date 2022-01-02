import { Flex } from '@chakra-ui/react';
import ListItem from './listitem';
import { useCubes } from '../../lib/cubes';
import { useAuth } from '../../lib/auth';
import { getCubes } from '../../lib/db';
import { useState, useEffect, useRef } from 'react';

const CubesList = () => {
	const auth = useAuth();
	const cubes = useCubes();

	return (
		<Flex flexDir="column">
			{cubes.cubes.map((cube) => (
				<ListItem
					key={cube.id}
					data={cube}
					user_uid={auth.user.uid}
					name={cube.name}
				></ListItem>
			))}
		</Flex>
	);
};

export default CubesList;
