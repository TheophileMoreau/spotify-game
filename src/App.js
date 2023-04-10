import './App.css';
import { useEffect, useState } from 'react';
import { Button, ChakraProvider, HStack } from '@chakra-ui/react'
import { Center, Grid, Flex } from '@chakra-ui/react';
import theme from './theme';
import spotifyLogo from './images/spotify1.png';
import { getSpotifyAuth, searchSpotifyArtist } from './service/spotify-functions';
import { ShowArtists } from './components/ShowArtists';
import { Slots, addArtistToSlots, removeArtistSlots } from './components/Slots';
import { HeaderTitle } from './components/HeaderTitle';
import { SearchBar } from './components/SearchBar';

function App() {
  // Initial State
  const emptyArtistSlot = {id:undefined,name:undefined,followers:undefined};
  let [inputValue, setInputValue] = useState('');
  let [artistsData, setArtistsData] = useState([]);
  let [selectedArtists, setSelectedArtists] = useState(Array(5).fill(emptyArtistSlot));

  // The handleChange() function to set a new state for input
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      searchSpotifyArtist(inputValue).then(data => { setArtistsData(data) }); // same as button
      setInputValue(''); // reset value when action is done
    }
  };

  useEffect(() => {
    getSpotifyAuth(); // run at beginning

    const interval = setInterval(() => {
      getSpotifyAuth();
    }, 1000 * 60 * 45); //every 45 minutes, need to refresh every hour 

    return () => clearInterval(interval);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Flex height='100vh' width='100vw' align='center' flexDirection='column'>
        <HeaderTitle text='TEST GAME' />
        <SearchBar imageLink={spotifyLogo} value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown}
          onClick={() => {
            searchSpotifyArtist(inputValue).then(data => { setArtistsData(data) }); setInputValue('');
          }} />
        <Center width='75%'>
          <Grid spacing='10px' padding='20px' width='100%' templateColumns='repeat(3, 1fr)'
            columnGap='10px' templateRows='repeat(2, 1fr)' rowGap='10px'>
            <ShowArtists arrayData={artistsData} selection={selectedArtists}
              selectClick={(artistId) => { setSelectedArtists(addArtistToSlots(selectedArtists, artistId, artistsData)); }}
              unselectClick={(artistId) => { setSelectedArtists(removeArtistSlots(selectedArtists, artistId, emptyArtistSlot)); }}
              />
          </Grid>
        </Center>
        <Center width='75%'>
          <Grid padding='10px' width='100%' templateColumns='repeat(5, 20%)' templateRows='repeat(1, 1fr)' columnGap='5px'>
            <Slots array={selectedArtists}
              onInsideClick={(artistId) => { setSelectedArtists(removeArtistSlots(selectedArtists, artistId, emptyArtistSlot)); }} />
          </Grid>
        </Center>
        <HStack padding='10px'>
          <Button onClick={() => setSelectedArtists(Array(5).fill(emptyArtistSlot))} colorScheme='red' size='md' variant='outline'>RESET</Button>
          <Button colorScheme='purple' size='md' variant='outline'>SAVE</Button>
        </HStack>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
