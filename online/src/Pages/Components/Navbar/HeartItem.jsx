const HeartItem = () => {
  return (
    <li className="HeartList__items__item">
      <figure className="img">
        <img src="./images/navbar/heart/p1.png" alt="" />
      </figure>
      <section className="title">
        <p>CALIFA FARMS</p>
        <p>咖啡師燕麥奶</p>
        <p>NT$199 元</p>
      </section>
      <span className="heart"></span>
    </li>
  );
};

export default HeartItem;
