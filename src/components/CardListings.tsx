import {FlatList} from 'react-native-gesture-handler';
import {Box} from '.';
import Card from './Card';
const data = [
  {id: '1', value: 'Item 1'},
  {id: '2', value: 'Item 2'},
  // ... add more items as needed
];

export function CardListings() {
  return (
    <Box>
      <FlatList data={data} keyExtractor={item => item.id} renderItem={Card} />
    </Box>
  );
}
