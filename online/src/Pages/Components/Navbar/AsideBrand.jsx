import { HashLink as Link } from 'react-router-hash-link';
const AsideBrand = ({ handleAsideBrand, brand }) => {
  return (
    <ul className={brand == 1 ? 'AsideBrand visible' : 'AsideBrand'}>
      <span className="AsideBrand__delete" onClick={handleAsideBrand}></span>
      <form className="AsideBrand__search">
        <span></span>
        <input type="text" placeholder="search" />
      </form>
      <li>
        <h1>品牌分類</h1>
        <span></span>
      </li>
      <li>
        <Link to={'/#HOT'}>熱銷排行</Link>
      </li>
      <li>
        <Link to={'/#NEW'}>最新商品</Link>
      </li>
      <li>
        <Link to={'/#SALE'}>優惠情報</Link>
      </li>
      <li>
        <Link to={'/#STYLE'}>風格體驗</Link>
      </li>
    </ul>
  );
};

export default AsideBrand;
