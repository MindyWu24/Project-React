const HeartItem = ({ item }) => {
  return (
    <li className="HeartList__items__item">
      <figure className="img">
        <img src={item.img} alt="" />
      </figure>
      <section className="title">
        <p>{item.brand}</p>
        <p>{item.name}</p>
        <p>NT${item.price} 元</p>
      </section>
      <span className="heart"></span>
    </li>
  );
};

export default HeartItem;
