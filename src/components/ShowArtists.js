import { Box, Center, Image, SimpleGrid, GridItem, Button } from '@chakra-ui/react';

// component
export function ShowArtists({ arrayData, selectClick, unselectClick, selection }) {
    return arrayData?.map((artist) =>
        <GridItem borderWidth='2px'
            borderColor={selection.map(e => e.id).includes(artist.id) ? 'teal' : '#1DB954'} rounded='lg'>
            <Button colorScheme={selection.map(e => e.id).includes(artist.id) ? 'green' : 'gray'}
            textColor={selection.map(e => e.id).includes(artist.id) ? 'white' : 'black'}
            onClick={selection.map(e => e.id).includes(artist.id) ? () => unselectClick(artist.id) : () => selectClick(artist.id)}
            padding={10} width='100%'>
                <SimpleGrid columns={3} spacing='5px'>
                    <Center whiteSpace='pre-wrap'>
                        <b>{artist.name}</b>
                    </Center>
                    <Box overflowX='auto'>
                        <Center>
                            <Image
                                borderRadius='full'
                                boxSize='50px'
                                objectFit='cover'
                                src={artist.images.length == 0 ? '' : artist.images[0].url}
                                alt={artist.name} />
                        </Center>
                    </Box>
                    <Center whiteSpace='pre-wrap'>
                        <b>{artist.followers.total} followers</b>
                    </Center>
                </SimpleGrid>
            </Button>
        </GridItem>
    );
};