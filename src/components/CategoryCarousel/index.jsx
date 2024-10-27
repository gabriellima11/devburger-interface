import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Container, ContainerItems, Title } from './styles';

export const CategoryCarousel = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('/categories');
      setCategories(response.data);
    }

    loadCategories();
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
      <Title>CATEGORIAS</Title>
      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisbile={false}
        itemClass="carousel-item"
      >
        {categories.map((item) => (
          <ContainerItems key={item.id} imageUrl={item.url}>
            <p>{item.name}</p>
          </ContainerItems>
        ))}
      </Carousel>
    </Container>
  );
};
