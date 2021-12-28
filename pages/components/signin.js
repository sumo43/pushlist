import {
	Text,
	Box,
	Button,
	Flex,
	Link,
	Heading,
	Divider
} from '@chakra-ui/react';

import { useAuth } from '../../lib/auth';

const Signin = () => {
	const auth = useAuth();
	return (
		<Box>
			<Flex
				flexDirection="column"
				align="center"
				justifyContent="center"
				h="100vh"
			>
				<Heading fontWeight="bold" fontSize="7xl">
					Welcome to Cubes!
				</Heading>

				<Flex align="center" flexDirection="column" mt="10">
					<Link onClick={(e) => auth.signin()}>Sign in</Link>
				</Flex>

				<Box
					as="footer"
					role="contentInfo"
					mx="auto"
					maxW="7xl"
					py="12"
					px={{ base: '4', md: '8' }}
					hidden="true"
				>
					<a
						href="https://yatsenkoa.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						an Artem Yatsenko production
					</a>
				</Box>
			</Flex>
		</Box>
	);
};

export default Signin;
