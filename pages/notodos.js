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

const NoTodos = (props) => {
    return (
        <VStack
            backgroundColor="teal.100"
            p="10"
            maxWidth="1000"
            borderRadius={"10"}
        >
            <Text fontSize="3xl">You have not added any todos. </Text>
        </VStack>
    );
};

export default NoTodos;
