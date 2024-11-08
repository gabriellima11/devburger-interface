import CartImage from '../../assets/cart.svg';
import { ContainerButton } from './styles';

export const CartButton = (props) => {
  return (
    <ContainerButton {...props}>
      <img src={CartImage} alt="carrinho-de-compras" />
    </ContainerButton>
  );
};
