import {
	Text,
	Box,
	Button,
	Flex,
	Link,
	Heading,
	Divider
} from '@chakra-ui/react';

const Loading = () => {
	return (
		<Box>
			<Flex
				flexDirection="column"
				align="center"
				justifyContent="center"
				h="100vh"
			>
				<Heading fontWeight="bold" fontSize="5xl">
					Loading...
				</Heading>
			</Flex>
		</Box>
	);
};

export default Loading;
