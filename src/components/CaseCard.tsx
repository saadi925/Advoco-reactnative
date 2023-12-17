import {AppText, Box, UserAvatar} from '.';
import FastImage from 'react-native-fast-image';
import {COLORS} from '../constants/Theme';
import {Pressable} from 'react-native';
interface CaseItem {
  id: string;
  location: string;
  category: string;
  title: string;
  description: string;
  status: string;
  date: number;
}
interface CardProps {
  item: {
    case: CaseItem;
    user: {
      name: string;
      profileImg: string;
    };
  };
}
const formatDate = (timestamp: number) => {
  const NowDate = new Date();
  const date = new Date(timestamp);
  if (
    NowDate.getDate() === date.getDate() &&
    NowDate.getFullYear() === date.getFullYear()
  ) {
    return 'Today';
  }
  return `${date.getMonth() + 1}/${date.getDate()}`;
};

function CheckStatus(status: string) {
  switch (status) {
    case 'Urgent':
      return COLORS.error;
    case 'Normal':
      return COLORS.success;
    case 'High':
      return COLORS.icon;
    default:
      return COLORS.error;
  }
}

export function Card({item}: CardProps) {
  const {case: Case, user} = item;
  const formattedDate = formatDate(Case.date);
  const statusColor = CheckStatus(Case.status);
  return (
    <Box marginBottom={18}>
      <Box flexDirection="row" justifyContent="space-between" width={'100%'}>
        <Box flexDirection="row">
          <UserAvatar isOnline />
          <Box>
            <AppText color={COLORS.text} fontWeight="700" text={user.name} />
            <AppText color={statusColor} fontWeight="700" text={Case.status} />
          </Box>
        </Box>
        <AppText color={COLORS.primary} fontWeight="700" text={Case.location} />
      </Box>
      <AppText
        color={COLORS.text}
        fontWeight="700"
        fontSize={20}
        text={Case.title}
      />
      <AppText color={COLORS.text} text={Case.description} />
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <AppText color={COLORS.primary} fontWeight="700" text={Case.category} />
        <AppText color={COLORS.icon} fontWeight="700" text={formattedDate} />
      </Box>
      <Pressable
        style={{
          marginTop: '5%',
          paddingHorizontal: '4%',
          paddingVertical: '3%',
          backgroundColor: COLORS.icon,
          borderRadius: 8,
        }}
        onPress={() => console.log('request sent')}>
        <AppText text="Message Client" textAlign="center" fontWeight="700" />
      </Pressable>
    </Box>
  );
}
