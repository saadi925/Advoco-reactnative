import {FlatList} from 'react-native-gesture-handler';
import {Box} from '.';
import {Card} from './CaseCard';
interface CaseItem {
  id: string;
  location: string;
  category: string;
  title: string;
  description: string;
  status: string;
  date: number;
}
export type CaseData = {
  case: CaseItem;
  user: {
    name: string;
    profileImg: string;
  };
};

export function CaseListings({data}: {data: CaseData[]}) {
  return (
    <FlatList
      style={{paddingHorizontal: '3%'}}
      data={data}
      keyExtractor={item => item.case.id}
      renderItem={Card}
    />
  );
}
