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
import { useEffect } from "react";

const DeletedTodo = (props) => {
    useEffect(() => {}, []);
    return (
        <VStack
            backgroundColor="teal.100"
            p="10"
            borderRadius={"10"}
            width="400px"
            color="blue"
        >
            <Flex justifyContent={"space-between"} width="100%">
                <Text fontSize="xl" fontWeight="bold">
                    {props.todo ? props.todo.name : "Placeholder Title"}
                </Text>
                <Spacer />
                <vStack>
                    <Text>Time Created:</Text>
                    <Text fontSize="lg">
                        {props.todo
                            ? props.todo.time_human.slice(0, 10) +
                              " " +
                              props.todo.time_human.slice(11, 19)
                            : "Time Created: 00:00:00"}
                    </Text>
                </vStack>
            </Flex>
            <Flex>
                <Text fontSize="xl">
                    {props.todo ? props.todo.desc : "Some Text"}
                </Text>
            </Flex>
        </VStack>
    );
};

export default DeletedTodo;
