import {
	Flex,
	Link,
	Heading,
	Divider,
	Text,
	Grid,
	Box,
	Image,
	Icon,
	createIcon
} from '@chakra-ui/react';
import { useAuth } from '../../lib/auth';
import { useCubes, getCubeById } from '../../lib/cubes';
import { useState, useRef, useEffect } from 'react';
import Loading from './loading';
import { updateCube } from '../../lib/db';
import { signInWithEmailAndPassword } from 'firebase/auth';

const TableElement = (props) => {
	return (
		<Flex
			width="2rem"
			height="2rem"
			border="2px solid"
			justifyContent="center"
			alignItems="center"
			key={props.i + '_flex'}
			onClick={() => props.onclick(props.i)}
		>
			<Box
				key={props.i + '_box'}
				width="1rem"
				height="1rem"
				bg="green.300"
				hidden={props.hide}
			/>
		</Flex>
	);
};

const Table = () => {
	const auth = useAuth();
	const cubes = useCubes();

	if (!cubes?.cubes[0]?.cube_state) {
		return <Loading />;
	}
	const [tableState, setTableState] = useState([]);
	const [labelState, setLabelState] = useState([]);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const id = window.location.href.split('/')[4];

		setTableState(cubes.getCubeById(id).cube_state);
	}, []);

	const updateTable = (i) => {
		const newTable = [...tableState];
		if (newTable[i] === 0) {
			newTable[i] = 1;
		} else if (newTable[i] === 1) {
			newTable[i] = 0;
		}
		setTableState(newTable);
		updateCube(newTable, window.location.href.split('/')[4]);
	};

	return (
		<Flex alignItems="center" justifyContent="center" width="80%">
			<Flex
				flexDirection="row"
				width="80%"
				height="80%"
				justifyContent={'space-around'}
			>
				<Flex height="100%" width="20%" gap="4" flexDirection="column">
					<Text fontSize="xs">Monday</Text>
					<Text fontSize="xs">Tuesday</Text>
					<Text fontSize="xs">Wednesday</Text>
					<Text fontSize="xs">Thursday</Text>
					<Text fontSize="xs">Friday</Text>
					<Text fontSize="xs">Saturday</Text>
					<Text fontSize="xs">Sunday</Text>
				</Flex>
				<Flex height="70%" float="center">
					<Grid
						templateColumns="repeat(10, 1fr)"
						templateRows="repeat(7, 1fr)"
					>
						{tableState.map((item, i) => {
							return (
								<TableElement
									key={'element_' + i}
									i={i}
									hide={item == 0}
									onclick={updateTable}
								/>
							);
						})}
					</Grid>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Table;
