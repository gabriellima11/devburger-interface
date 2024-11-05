import { Container, Banner, Title, Content } from './styles';

import Logo from '../../assets/logo.svg';

export const Cart = () => {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt="logo" />
      </Banner>
      <Title>Checkout - Pedido</Title>
      <Content></Content>
    </Container>
  );
};
