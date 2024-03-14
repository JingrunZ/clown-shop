import "./cart-item.style.scss";

const CartItem = ({ product }) => {
  const { id, name, quality, price, imageUrl } = product;

  return (
    <div className="product-card">
        
      <img src={`${imageUrl}`} alt={id} />
      <div className="productInfo-container">
        <p className="name">{name}</p>
        <p>
          {quality} X ${price}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
