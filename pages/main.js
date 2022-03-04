import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
    Button,
    Stack,
    ButtonGroup,
    Flex,
    Text,
    Spacer,
    Link,
    VStack,
} from "@chakra-ui/react";
import { useUser } from "../util/auth";
import Router from "next/router";
import { useEffect } from "react";
import Todo from "./todo";
import Controls from "./controls";
import NoTodos from "./notodos";
import PushModal from "./pushmodal";
import Loading from "./components/loading";

export default function Main() {
    const user = useUser();

    useEffect(async () => {}, []);

    const handleSignout = async () => {
        await user.signout();
    };

    const onPush = async () => {};

    if (user.userCheck == 1) {
        return (
            <div>
                <Flex
                    flexDirection="column"
                    alignItems="stretch"
                    p={5}
                    height="100%"
                    backgroundColor="whiteAlpha.500"
                >
                    <Flex
                        alignItems="space-between"
                        justifyContent="space-between"
                        backgroundColor="whiteAlpha.500"
                        height="10%"
                    >
                        <Flex alignItems="center" ml={10} mr={10}>
                            <Link fontSize="3xl" fontWeight="bold">
                                Pushlist
                            </Link>
                        </Flex>
                        <Flex
                            justifyContent="flex-start"
                            alignItems="center"
                            ml={10}
                            mr={10}
                        >
                            <Flex
                                flexDirection="column"
                                alignContent={"center"}
                                alignItems="center"
                            >
                                <Text fontSize="2xl">{user.user.email}</Text>
                                <Button
                                    colorScheme="teal"
                                    variant="solid"
                                    size="sm"
                                    maxWidth={"16"}
                                    onClick={handleSignout.bind(this)}
                                >
                                    Logout
                                </Button>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex m="100" justifyContent={"center"}>
                        <VStack>
                            <Todo />
                            <Controls />
                        </VStack>
                    </Flex>

                    <Flex
                        height="80%"
                        backgroundColor="whiteAlpha.500"
                        justifyContent="center"
                    />
                    <Flex
                        height="10%"
                        backgroundColor="whiteAlpha.500"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <Link fontSize="xs">an Artem Yatsenko production</Link>
                    </Flex>
                </Flex>
            </div>
        );
    } else {
        return <Loading />;
    }
}
