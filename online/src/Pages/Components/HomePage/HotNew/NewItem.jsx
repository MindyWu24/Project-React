const NewItem = () => {
  return (
    <li className="item">
      <figure className="title">
        <img src="/images/Homepage/art1/new/new-title.png" alt="" />
      </figure>
      <section className="item__productBox">
        <figure className="product__img">
          <img src="/images/Homepage/art1/new/new2.png" alt="" />
        </figure>
        <h1>Oatside 職人燕麥植物奶</h1>
        <p>NT$165</p>
      </section>
      <button>
        SHOP NOW<span></span>
      </button>
    </li>
  );
};

export default NewItem;
