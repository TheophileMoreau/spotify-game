import { GridItem, VStack, Text, Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

// component
export function Slots({ array, onInsideClick }) {
    return array.map((elements, index) =>
        <GridItem borderWidth='2px' borderColor={elements.id ? 'orange' : 'grey'}
            borderStyle={elements.id ? 'solid' : 'dotted'} rounded='lg' key={index}>
            <Button padding={10} width='100%' colorScheme={elements.id ? 'orange' : ''}
                onClick={() => onInsideClick(elements.id)}>
                {elements.id === undefined
                    ? <AddIcon color='gray' />
                    :
                    <VStack align='flex-start' align='center'>
                        <Text wordWrap='break-word'>
                            {elements.name}
                        </Text>
                        <Text wordWrap='break-word' align='center'>
                            {elements.followers}
                        </Text>
                    </VStack>
                }
            </Button>
        </GridItem>
    );
};

// associated functions

export function addArtistToSlots(arrayToUpdate, selectedArtist, arrayWithInfos) {
    const updatedSlots = [...arrayToUpdate];
    const emptySlotIndex = arrayToUpdate.findIndex(slot => slot?.id === undefined); // find the index of the first empty slot
    const artistIndex = arrayToUpdate.findIndex(slot => slot?.id == selectedArtist); // find the index of the first slot with same id
    const dataIndex = arrayWithInfos.findIndex(data => data?.id == selectedArtist);
    if (emptySlotIndex !== -1 && artistIndex == -1) { // if there is an empty slot
        updatedSlots[emptySlotIndex] = {
            id: arrayWithInfos[dataIndex].id,
            name: arrayWithInfos[dataIndex].name,
            followers: arrayWithInfos[dataIndex].followers.total
        };
    }
    console.log(updatedSlots);
    return updatedSlots;
};

export function removeArtistSlots(currentArray, selectedSlot, emptySlot) {
    const updatedSlots = [...currentArray];
    console.log(updatedSlots);
    const targetSlotIndex = currentArray.findIndex(slot => slot?.id == selectedSlot); // find the index of the first slot with same id
    console.log(currentArray.findIndex(slot => slot?.id == selectedSlot));
    if (targetSlotIndex !== -1) { // if there is a slot with this id
        updatedSlots.splice(targetSlotIndex, 1);
        updatedSlots.push(emptySlot);
    }

    console.log(updatedSlots);
    return updatedSlots;
};
