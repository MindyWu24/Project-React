const Cart = () => {
  return (
    <li className="cart">
      <figure className="cart__img">
        <img src="./images/Shopcart/cart/product-1.png" alt="" />
      </figure>
      <section className="cart__title">
        <p>CALIFA FARMS</p>
        <p>咖啡師燕麥奶</p>
      </section>
      <form className="cart__btn">
        <span></span>
        <input type="text" />
        <span></span>
      </form>
      <h2 className="cart__price">
        NT$199<span>元</span>
      </h2>
      <span className="cart__delete"></span>
    </li>
  );
};

export default Cart;
