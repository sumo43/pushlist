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

const placeholder_text =
    "page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

const Todo = (props) => {
    return (
        <VStack
            backgroundColor="teal.100"
            p="10"
            maxWidth="1000"
            borderRadius={"10"}
        >
            <Flex justifyContent={"space-between"} width="100%">
                <Text fontSize="xl" fontWeight="bold">
                    {props.item ? props.item.title : "Placeholder Title"}
                </Text>
                <Spacer />
                <Text fontSize="xl" fontWeight="bold">
                    {props.item
                        ? props.item.timeCreated
                        : "Time Created: 00:00:00"}
                </Text>
            </Flex>
            <Flex>
                <Text fontSize="xl">
                    {props.item ? props.item.description : placeholder_text}
                </Text>
            </Flex>
        </VStack>
    );
};

export default Todo;
