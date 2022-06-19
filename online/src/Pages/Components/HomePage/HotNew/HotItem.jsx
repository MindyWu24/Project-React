const HotItem = () => {
  return (
    <li className="item">
      <figure className="item__img">
        <img
          src="./Project-React/images/Homepage/art1/hot/hot-product.png"
          alt=""
        />
      </figure>
      <section className="item__content">
        <h1>Minor Figures 燕麥奶 (6入)</h1>
        <div className="text">
          <h2>
            <span>24%</span> NT$999
          </h2>
          <p>
            NT$1314<span></span>
          </p>
        </div>
      </section>
    </li>
  );
};

export default HotItem;
