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

const Controls = (props) => {
    return (
        <Flex p="10" maxWidth="1000" borderRadius={"10"}>
            <Button
                size="lg"
                p="35"
                borderRadius="15"
                mr="10"
                backgroundColor="red.500"
                color="white"
                boxShadow="dark-lg"
            >
                Push
            </Button>
            <Button
                size="lg"
                p="35"
                borderRadius="15"
                mr="10"
                backgroundColor="green.500"
                color="white"
                boxShadow="dark-lg"
            >
                Pop
            </Button>
        </Flex>
    );
};

export default Controls;
