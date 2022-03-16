import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
    Button,
    Stack,
    ButtonGroup,
    Text,
    Spacer,
    Flex,
} from "@chakra-ui/react";
import { useUser } from "../util/auth";
import { useEffect } from "react";
import Main from "./main";

const SigninPage = (props) => {
    const user = useUser();

    useEffect(async () => {
        user.trySignin();
    }, []);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.description}>
                    <Text fontSize="6xl" fontWeight="bold">
                        Pushlist
                    </Text>
                    <Text mb={4} fontSize="3xl">
                        The Queue-Based Todo List
                    </Text>
                    <Button
                        colorScheme="teal"
                        variant="solid"
                        onClick={props.signin.bind(this)}
                    >
                        Login
                    </Button>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    an Artem Yatsenko production
                </a>
            </footer>
        </div>
    );
};

export default function Home() {
    const user = useUser();

    const handleSignin = async () => {
        user.signin();
    };

    const handleSignout = async () => {
        user.signout();
    };

    if (user.userCheck == 0) {
        return <SigninPage signin={handleSignin} />;
    } else {
        return <Main signout={handleSignout} ß />;
    }
}
