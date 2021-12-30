import { Flex, Link, Heading, Divider } from '@chakra-ui/react';

const CubePage = (props) => {
	return (
		<Flex justifyContent="center">
			<Link fontSize="lg" href={'/tables/' + props.id}>
				{props.name}
			</Link>
		</Flex>
	);
};

export default CubePage;
