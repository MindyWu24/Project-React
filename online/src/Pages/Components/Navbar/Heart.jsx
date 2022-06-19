import HeartItem from './HeartItem';

const Heart = ({ handleAsideBrand, brand }) => {
  return (
    <article className={brand == 2 ? 'HeartList visible' : 'HeartList'}>
      <span className="wave"></span>
      <span className="close" onClick={handleAsideBrand}></span>
      <h1>我的收藏</h1>
      <ul className="HeartList__items">
        <HeartItem />
        <HeartItem />
        <HeartItem />
        <HeartItem />
      </ul>
    </article>
  );
};

export default Heart;
