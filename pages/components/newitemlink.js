import { Flex, Link, Heading, Divider, Input } from '@chakra-ui/react';
import { useNewItem } from '../../lib/newitem';
import NewItemModal from './newitemmodal';

const NewItemLink = () => {
	const new_item = useNewItem();
	console.log(new_item);

	return (
		<>
			<Flex flexDirection={'row'} justifyContent="center">
				<Link onClick={(e) => new_item.setActive(true)}>
					+ New Table
				</Link>
			</Flex>
			<NewItemModal active={new_item.active} />
		</>
	);
};

export default NewItemLink;
