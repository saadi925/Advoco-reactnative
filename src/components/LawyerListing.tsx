import {FlatList} from 'react-native-gesture-handler';
import {AppText, Box} from '.';
import {LawyerCardItem} from './LawyerCard';
export type LawyerCard = {
  user: {
    id: string;
    name: string;
    profileImg: string;
    category: string;
    location: string;
    rating: number;
    reviews: number;
    experience: number;
    description: string;
    status: string;
    isOnline: boolean;
  };
};

export function LawyerListing({data}: {data: LawyerCard[]}) {
  return (
    <FlatList
      style={{paddingHorizontal: '3%'}}
      data={data}
      keyExtractor={item => item.user.id}
      renderItem={LawyerCardItem}
    />
  );
}
