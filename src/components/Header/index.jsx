import { useNavigate } from 'react-router-dom';

import { useUser } from '../../hooks/UserContext';

import {
  Container,
  Navigation,
  Options,
  HeaderLink,
  Profile,
  ProfileName,
  Logout,
  Cart,
  CartLink,
  CartBadge,
} from './styles';
import Logo from '../../assets/logo.svg';
import ProfileImage from '../../assets/profile.svg';
import CartImage from '../../assets/cart.svg';
import { useCart } from '../../hooks/CartContext';

export const Header = () => {
  const navigate = useNavigate();

  const { cartProducts } = useCart();

  const userData = useUser();
  const name = userData.userInfo.name;

  return (
    <Container>
      <Navigation>
        <img src={Logo} alt="logo" />
        <div>
          <HeaderLink to={'/'}>Home</HeaderLink>
          <HeaderLink to={'/menu?categoria=0'}>Cardápio</HeaderLink>
          <HeaderLink href="">Contatos</HeaderLink>
        </div>
      </Navigation>
      <Options>
        <Profile>
          <img src={ProfileImage} alt="" />
          <div>
            <p>
              Olá, <ProfileName>{name}</ProfileName>
            </p>
            <Logout to={'/login'} onClick={() => userData.logout()}>
              Sair
            </Logout>
          </div>
        </Profile>
        <Cart>
          <img src={CartImage} alt="carrinho" />
          <CartBadge>{cartProducts.length}</CartBadge>
          <CartLink
            onClick={() =>
              navigate({ pathname: '/carrinho' }, { replace: true })
            }
          >
            Carrinho
          </CartLink>
        </Cart>
      </Options>
    </Container>
  );
};
