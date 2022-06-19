import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

const Intro = ({ item }) => {
  return (
    <article className={item.productBgcStyle} id={item.pageID}>
      <ul className="product__intro">
        <li>
          <img src={item.logo} alt="" />
        </li>
        <li>
          <h1>{item.h1}</h1>
          <p>
            {item.main}
            <span>{item.span}</span>
          </p>
        </li>
        <li>
          <h2>{item.h2}</h2>
          {item.section.map((item) => (
            <p key={uuidv4()}>{item}</p>
          ))}
        </li>
      </ul>
      <ul className={item.productListStyle}>
        {item.product.map((product) => (
          <Item key={uuidv4()} textStyle={item.textStyle} product={product} />
        ))}
      </ul>
      <figure className="product__bottomBgc">
        <img src={item.img} alt="" />
      </figure>
    </article>
  );
};

export default Intro;
