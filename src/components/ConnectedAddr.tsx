import { useWallet } from '@alephium/web3-react';
import { Center, Text } from '@mantine/core';

const ConnectedAddr = () => {
  const { account } = useWallet();

  return (
    <Center>
      <Text size={'xs'}>{account?.address}</Text>
    </Center>
  );
};
export default ConnectedAddr;
