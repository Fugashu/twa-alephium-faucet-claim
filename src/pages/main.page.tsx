import { Container, Stack, Text, Title } from '@mantine/core';
import WalletConnectButton from '../components/WalletConnectButton.tsx';
import ClaimFromFaucetButton from '../components/ClaimFromFaucetButton.tsx';

const MainPage = () => {
  return (
    <Container>
      <Stack gap={'xl'} justify={'center'}>
        <Stack align={'center'}>
          <Title c={'white'}>TWAlph</Title>
          <Text c={'dimmed'}>
            Claim Alephium Testnet tokens to your wallet. <br />
            Connect your wallet or paste your testnet account wallet address below.
          </Text>
        </Stack>
        <WalletConnectButton />
        <ClaimFromFaucetButton />
      </Stack>
    </Container>
  );
};
export default MainPage;
