import { Flex, Link, Heading, Divider, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useAuth } from '../../lib/auth';
import { useRouter } from 'next/router';
import Loading from './loading';
import { LayoutGroupContext } from 'framer-motion';

const Wrapper = ({ children }) => {
	const auth = useAuth();
	const router = useRouter();

	const logout = () => {
		auth.setUser(false);
		router.push('/');
		auth.signout();
	};

	return (
		<Flex
			flexDirection="column"
			alignItems="stretch"
			p={5}
			height="100vh"
			backgroundColor="whiteAlpha.500"
		>
			<Flex
				alignItems="space-between"
				justifyContent="space-between"
				backgroundColor="whiteAlpha.500"
				height="10%"
			>
				<Flex alignItems="center" ml={10} mr={10}>
					<Link fontSize="xl" href="/">
						Cubes
					</Link>
				</Flex>
				<Flex
					justifyContent="flex-start"
					alignItems="center"
					flexDir={'column'}
					ml={10}
					mr={10}
				>
					<Text fontSize="lg" color="gray.400">
						{auth.user.email}
					</Text>
					<Link
						fontSize="xl"
						onClick={(e) => {
							logout();
						}}
						textAlign="justify"
					>
						Sign out
					</Link>
				</Flex>
			</Flex>
			<Flex
				height="80%"
				backgroundColor="whiteAlpha"
				justifyContent="center"
				alignItems="center"
				width="100%"
			>
				{children}
			</Flex>
			<Flex
				height="10"
				backgroundColor="whiteAlpha.500"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
			>
				<Flex
					justifyContent="flex-start"
					overflow="visible"
					alignItems="center"
					fontSize="sm"
				>
					<Link ml={2} mr={2} color="blackAlpha.500" fontSize="sm">
						About
					</Link>
					<Divider
						borderColor="blackAlpha.500"
						orientation="vertical"
						height={5}
					/>
					<Link ml={2} mr={2} color="blackAlpha.500" fontSize="sm">
						Help
					</Link>
					<Divider
						borderColor="blackAlpha.500"
						orientation="vertical"
						height={5}
					/>
					<Link ml={2} mr={2} color="blackAlpha.500" fontSize="sm">
						GitHub
					</Link>
				</Flex>
				<Link fontSize="xs">an Artem Yatsenko production</Link>
			</Flex>
		</Flex>
	);
};

export default Wrapper;
