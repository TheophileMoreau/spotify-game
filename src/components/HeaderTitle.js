import { Box, Center, Heading } from '@chakra-ui/react';

export function HeaderTitle({ text }) {
    return (
        <Box height='20%' width='100%' bgGradient='linear(to-r, #1DB954, black)'>
            <Center height='full'>
                <Heading color="white">{text}</Heading>
            </Center>
        </Box>
    );
};