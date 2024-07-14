/* eslint-disable react/prop-types */
const Product = ({
  productName,
  image,
  price,
  quantity,
  isStar,
  id,
  deleteProduct,
}) => {
  return (
    <div
      style={{
        margin: 8,
        padding: 8,
        border: "1px solid",
        borderRadius: "4px",
      }}
    >
      <img
        src={image}
        style={{ height: 200, width: 300, objectFit: "contain" }}
      />
      <h2>{productName}</h2>
      <h3>{price}</h3>
      <h4>Qty: {quantity}</h4>
      {isStar && <i className="fa-solid fa-star"></i>}
      <button onClick={() => deleteProduct(id)}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default Product;
