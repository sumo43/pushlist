import { Flex, Link, Heading, Divider } from '@chakra-ui/react';
import { ProvideNewItem } from '../../lib/newitem';
import ListItem from './listitem';
import NewItemLink from './newitemlink';

const List = () => {
	return (
		<Flex
			height="100%"
			width="70%"
			flexDirection="column"
			minHeight="100%"
			alignItems="stretch"
		>
			<Flex
				width="100%"
				height="30%"
				justifyContent="center"
				alignItems="center"
			>
				<Heading
					fontWeight="bold"
					fontSize="4xl"
					size="md"
					textAlign="center"
				>
					Your Tables
				</Heading>
			</Flex>
			<Flex
				height="70%"
				justifyContent="center"
				alignItems="flex-start"
				p={10}
			>
				<Flex
					width="100%"
					justifyContent="center"
					flexDirection="column"
				>
					<ListItem name="Cube 1" link="" />
					<ListItem name="Cube 2" link="" />
					<ListItem name="Cube 3" link="" />
					<ProvideNewItem>
						<NewItemLink />
					</ProvideNewItem>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default List;
