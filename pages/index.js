import Head from 'next/head';
import { useAuth } from '../lib/auth';
import { useRouter } from 'next/router';

import {
	Text,
	Box,
	Button,
	Flex,
	Link,
	Heading,
	Divider
} from '@chakra-ui/react';

import Signin from './components/signin';
import Dashboard from './components/dashboard';
import Loading from './components/loading';

const Home = () => {
	const auth = useAuth();

	if (auth?.user === '') {
		return <Loading />;
	} else if (auth?.user == false) {
		return <Signin />;
	} else {
		return <Dashboard />;
	}
};

export default Home;
