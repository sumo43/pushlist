import { Flex, Link, Heading, Divider, Input } from '@chakra-ui/react';
import { useNewItem } from '../../lib/newitem';
import NewItemModal from './newitemmodal';
import { useState } from 'react';

const NewItemLink = () => {
	const new_item = useNewItem();
	const [modal_active, setActive] = useState(false);

	return (
		<>
			<Flex flexDirection={'row'} justifyContent="center">
				<Link onClick={() => setActive(true)}>+ New Table</Link>
			</Flex>
			<NewItemModal active={modal_active} setActive={setActive} />
		</>
	);
};

export default NewItemLink;
