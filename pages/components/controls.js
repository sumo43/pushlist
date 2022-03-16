import {
    Button,
    Stack,
    ButtonGroup,
    Flex,
    Text,
    Spacer,
    Link,
    VStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    Textarea,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { setLogLevel } from "firebase/app";
import { useEffect, useRef } from "react";
import Loading from "./loading";
import { useUser } from "../../util/auth";
import { createTodo } from "../../util/db";
import DeletedTodo from "./deletedTodo";

const PushButton = () => {
    const user = useUser();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const refTitle = useRef();
    const refDescription = useRef();

    const onSubmit = async () => {
        onClose();
        const title = refTitle.current.value;
        const desc = refDescription.current.value;
        const uid = user.user.uid;

        const obj = createTodo(title, desc, uid);
        user.pushTodo(uid, obj);
    };
    if (user.userCheck != 1) {
        return <Loading />;
    }
    return (
        <>
            <Button
                size="lg"
                w="200px"
                borderRadius="15"
                mr="10"
                backgroundColor="green.500"
                color="white"
                boxShadow="dark-lg"
                onClick={onOpen}
            >
                Push
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Push a new item</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input ref={refTitle} placeholder="Title" mb="4" />
                        <Textarea
                            ref={refDescription}
                            placeholder="Description"
                            height="200"
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="red" onClick={onClose} mr="5">
                            Close
                        </Button>
                        <Button colorScheme="teal" onClick={onSubmit}>
                            Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

const PopButton = () => {
    const user = useUser();

    if (user.userCheck != 1) {
        return <Loading />;
    }
    return (
        <>
            <Button
                size="lg"
                w="200px"
                borderRadius="15"
                mr="10"
                backgroundColor="red.500"
                color="white"
                boxShadow="dark-lg"
                onClick={user.pop.bind(this)}
            >
                Pop
            </Button>
        </>
    );
};

const DeletedButton = () => {
    const user = useUser();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const refTitle = useRef();
    const refDescription = useRef();
    const closeHandler = () => {
        onClose();
        return;
    };

    const onSubmit = async () => {
        onClose();
        const title = refTitle.current.value;
        const desc = refDescription.current.value;
        const uid = user.user.uid;
        const obj = createTodo(title, desc, uid);
        user.pushTodo(uid, obj);
    };
    const onRestore = async (todo) => {
        user.restore(todo);
    };
    if (user.userCheck != 1) {
        return <Loading />;
    }
    return (
        <>
            <Button
                width="500px"
                height="100px"
                size="lg"
                borderRadius="15"
                p="10"
                backgroundColor="blue.200"
                color="white"
                boxShadow="dark-lg"
                onClick={onOpen}
            >
                View Deleted
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Deleted Todos</ModalHeader>
                    <ModalCloseButton />
                    <Flex justifyContent={"center"}>
                        <VStack h="500px" overflow="scroll">
                            {user.deletedTodos.map((todo, index) => {
                                return (
                                    <DeletedTodo
                                        key={index}
                                        onRestore={onRestore}
                                        todo={todo}
                                    />
                                );
                            })}
                        </VStack>
                    </Flex>
                </ModalContent>
            </Modal>
        </>
    );
};

const Controls = (props) => {
    return (
        <VStack alignContent={"center"}>
            <Flex
                p="20"
                borderRadius={"10"}
                width="500px"
                alignContent="center"
                justifyContent="center"
            >
                <PushButton />
                <PopButton />
            </Flex>
            <Flex>
                <DeletedButton />
            </Flex>
        </VStack>
    );
};

export default Controls;
