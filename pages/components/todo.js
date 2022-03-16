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

const placeholder_text =
    "page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

const Todo = (props) => {
    useEffect(() => {}, []);
    return (
        <VStack
            backgroundColor="teal.100"
            p="10"
            maxWidth="1000"
            minWidth="700"
            borderRadius={"10"}
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
                    {props.todo ? props.todo.desc : placeholder_text}
                </Text>
            </Flex>
        </VStack>
    );
};

export default Todo;
