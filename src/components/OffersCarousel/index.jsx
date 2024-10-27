import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container, Title, ContainerItems } from './styles';
import { Button } from '../Button';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const OffersCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      setProducts(response.data);
    }

    loadProducts();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1280, min: 690 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 2,
    },
  };

  return (
    <Container>
      <Title>OFERTAS DO DIA</Title>
      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisbile={false}
        itemClass="carousel-item"
      >
        {products.map(
          (item) =>
            item.offer && (
              <ContainerItems key={item.id}>
                <img src={item.url} />
                <p className="name">{item.name}</p>
                <p className="price">R${item.price}</p>
                <Button>
                  <i class="bi bi-cart-plus"></i>
                </Button>
              </ContainerItems>
            ),
        )}
      </Carousel>
    </Container>
  );
};
