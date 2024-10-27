import { Container, Banner, Content } from './style';

import HomeBanner from '../../assets/banner-home.svg';
import { CategoryCarousel } from '../../components/CategoryCarousel';
import { OffersCarousel } from '../../components/OffersCarousel';

export const Home = () => {
  return (
    <main>
      <Banner>
        <img src={HomeBanner} alt="banner-home" />
        <h1>Bem-vindo!</h1>
      </Banner>

      <Container>
        <Content>
          <CategoryCarousel />
          <OffersCarousel />
        </Content>
      </Container>
    </main>
  );
};
