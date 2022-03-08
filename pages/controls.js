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
import Loading from "./components/loading";
import { useUser } from "../util/auth";
import { createTodo } from "../util/db";

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
                p="35"
                borderRadius="15"
                mr="10"
                backgroundColor="red.500"
                color="white"
                boxShadow="dark-lg"
                onClick={onOpen}
            >
                Push
            </Button>
            <Modal isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Push a new item</ModalHeader>
                    <ModalCloseButton onClick={onClose} />
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
                p="35"
                borderRadius="15"
                mr="10"
                backgroundColor="green.500"
                color="white"
                boxShadow="dark-lg"
                onClick={user.pop.bind(this)}
            >
                Pop
            </Button>
        </>
    );
};

const Controls = (props) => {
    return (
        <Flex p="10" borderRadius={"10"}>
            <PushButton />
            <PopButton />
        </Flex>
    );
};

export default Controls;
