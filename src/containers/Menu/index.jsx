import { useState, useEffect } from 'react';

import { api } from '../../services/api';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  Container,
  ContainerItems,
  Banner,
  BackButton,
  CategoryMenu,
  CategoryButton,
} from './style';

import MenuBanner from '../../assets/banner-menu.svg';

import { CardProduct } from '../../components/CardProduct';

export const Menu = () => {
  const navigate = useNavigate();

  // Verifica se o usuário está autenticado
  useEffect(() => {
    const userData = localStorage.getItem('devburger:userData');
    if (!userData) {
      navigate('/login');
    }
  }, [navigate]);

  //Id da categoria clicada na Home
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search).get('categoria');

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(queryParams);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('categories');
      const newCategories = [{ id: 0, name: 'Todas' }, ...response.data];
      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data } = await api.get('products');
      setProducts(data);
      console.log(data);
    }

    loadCategories();
    loadProducts();
  }, []);

  //Filtrar produtos conforme categoria
  useEffect(() => {
    if (JSON.parse(activeCategory) === 0) {
      setFilteredProducts(products);
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.id_category == activeCategory,
      );
      setFilteredProducts(newFilteredProducts);
    }
  }, [products, activeCategory]);

  return (
    <Container>
      <Banner>
        <img src={MenuBanner} alt="banner-home" />
        <div>
          <h1>
            O MELHOR
            <br />
            HAMBURGUER
            <br /> ESTA AQUI! <br />
            <span>Esse cardápio está irresistível!</span>
          </h1>
        </div>
      </Banner>
      <BackButton onClick={() => navigate('/')}> Voltar</BackButton>
      <CategoryMenu>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            $isActiveCategory={category.id == activeCategory}
            onClick={() => {
              navigate(
                {
                  pathname: '/menu',
                  search: `?categoria=${category.id}`,
                },
                {
                  replace: true,
                },
              );
              setActiveCategory(category.id);
            }}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoryMenu>

      <ContainerItems>
        {filteredProducts.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </ContainerItems>
    </Container>
  );
};
