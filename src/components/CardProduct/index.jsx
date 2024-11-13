import { ContainerItems, Image } from './styles';
import { CartButton } from '../CartButton';
import { formatPrice } from '../../utils/formatPrice';
import { useCart } from '../../hooks/CartContext';

import PropTypes from 'prop-types';

export const CardProduct = ({ product }) => {
  const { putProductInCart } = useCart();

  return (
    <ContainerItems key={product.id}>
      <Image src={product.url} />
      <div>
        <p className="name">{product.name}</p>
        <p className="price">{formatPrice(product.price)}</p>
      </div>
      <CartButton onClick={() => putProductInCart(product)}></CartButton>
    </ContainerItems>
  );
};

CardProduct.proptypes = {
  product: PropTypes.object,
};
