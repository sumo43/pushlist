import { Flex, Link, Heading, Divider } from '@chakra-ui/react';

const ListItem = (props) => {
	return (
		<Flex justifyContent="center">
			<Link fontSize="lg">{props.name}</Link>
		</Flex>
	);
};

export default ListItem;
