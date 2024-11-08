import { Table } from '../index';
import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import { ButtonGroup, Image, EmptyCart, TrashIcon } from './styles';
import TrashImage from '../../assets/trash.svg';

export const CartItems = () => {
  const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } =
    useCart();

  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th>Itens</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        {cartProducts?.length > 0 ? (
          cartProducts.map((product) => (
            <Table.Tr key={product.id}>
              <Table.Td>
                <Image src={product.url} />
              </Table.Td>
              <Table.Td>
                <p>{product.name}</p>
              </Table.Td>
              <Table.Td>
                <p>{formatPrice(product.price)}</p>
              </Table.Td>
              <Table.Td>
                <ButtonGroup>
                  <button onClick={() => decreaseProduct(product.id)}>-</button>
                  <p>{product.quantity}</p>
                  <button onClick={() => increaseProduct(product.id)}>+</button>
                </ButtonGroup>
              </Table.Td>
              <Table.Td>
                <p>{formatPrice(product.quantity * product.price)}</p>
              </Table.Td>
              <Table.Td>
                <TrashIcon onClick={() => deleteProduct(product.id)}>
                  <img src={TrashImage} alt="lixeira" />
                </TrashIcon>
              </Table.Td>
            </Table.Tr>
          ))
        ) : (
          <EmptyCart>Carrinho Vazio :(</EmptyCart>
        )}
      </Table.Body>
    </Table.Root>
  );
};
