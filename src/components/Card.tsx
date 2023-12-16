import {AppText, Box} from '.';

export function Card({item}) {
  return (
    <Box>
      <AppText text={item.value} />
    </Box>
  );
}
