import { Button, Center, Input, VStack, HStack, Box, Image } from '@chakra-ui/react';

export function SearchBar({imageLink,value,onChange,onKeyDown,onClick}) {
    return (
        <VStack height='15%' width='100%'>
            <Box height='70%' >
                <Center height='full'>
                    <Image src={imageLink} alt='Logo Spotify' height='50%' />
                </Center>
            </Box>
            <Center height='30%'>
                <HStack>
                    <Input placeholder='Search for an artist...' variant='filled' focusBorderColor='#1DB954' size='md'
                        type="text" value={value} onChange={onChange} onKeyDown={onKeyDown} />
                    <Button onClick={onClick}
                        colorScheme='green' size='md' variant='outline'>SUBMIT</Button>
                </HStack>
            </Center>
        </VStack>
    );
};