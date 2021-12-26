import Head from 'next/head';
import { useAuth } from '../lib/auth';
import { Box, Button, Heading, Text, Icon, Flex } from '@chakra-ui/react';

import CustomLogo from '../lib/customlogo';

const Home = () => {
	const auth = useAuth();

	return (
		<div>
			<Head></Head>

			<Flex
				flexDirection="column"
				align="center"
				justifyContent="center"
				h="100vh"
			>
				<CustomLogo />
				<Heading fontWeight="bold" fontSize="7xl">
					Welcome to Cubes!
				</Heading>

				<Flex align="center" flexDirection="column" mt="10">
					{auth?.user ? (
						<Box>
							<Button>Go</Button>
							<Text fontWeight="bold">{auth?.user?.email}</Text>
							<Button onClick={(e) => auth.signout()}>
								Sign Out
							</Button>
						</Box>
					) : (
						<Button onClick={(e) => auth.signin()}>Sign in</Button>
					)}
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
		</div>
	);
};

export default Home;
