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
