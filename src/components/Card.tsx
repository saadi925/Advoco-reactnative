import {AppText, Box} from '.';

export default function Card({item}) {
  return (
    <Box>
      <AppText text={item.value} />
    </Box>
  );
}
