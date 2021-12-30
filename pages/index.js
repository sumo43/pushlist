import Head from 'next/head';
import { useAuth } from '../lib/auth';
import { Router, useRouter } from 'next/router';
import { useState } from 'react';

import {
	Text,
	Box,
	Button,
	Flex,
	Link,
	Heading,
	Divider
} from '@chakra-ui/react';

import Go from './components/go';
import Loading from './components/loading';
import Signin from './components/signin';

const Home = () => {
	const auth = useAuth();
	const router = useRouter();
	const [count, setCount] = useState(0);

	if (auth?.user === '') {
		return <Loading />;
	} else if (auth?.user == false) {
		return <Signin />;
	} else {
		if (count == 0) {
			router.push(`/users/${auth.user.uid}`);
			setCount(1);
		}
		return <Go />;
	}
};

export default Home;
