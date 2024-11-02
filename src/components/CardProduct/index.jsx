import { ContainerItems, Image } from './styles';
import { CartButton } from '../CartButton';
import { formatPrice } from '../../utils/formatPrice';

import PropTypes from 'prop-types';

export const CardProduct = ({ item }) => {
  return (
    <ContainerItems key={item.id}>
      <Image src={item.url} />
      <div>
        <p className="name">{item.name}</p>
        <p className="price">{formatPrice(item.price)}</p>
      </div>
      <CartButton className="cart-button"></CartButton>
    </ContainerItems>
  );
};

CardProduct.proptypes = {
  item: PropTypes.object,
};
