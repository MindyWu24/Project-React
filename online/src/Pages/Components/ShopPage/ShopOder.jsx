import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react';
const ShopOder = () => {
  const shopOder = document.querySelector('.shopOder');
  const [isDown, setIsDown] = useState('false');
  const handleDownList = () => {
    if (!isDown) {
      shopOder.scrollTo(0, 0);
    }
    setIsDown(!isDown);
  };
  return (
    <article className="shopOder">
      <section className="shopOder__container">
        <ul className="title">
          <h1>[Minor Figures 小人物] 咖啡大師-燕麥奶</h1>
          <li>· 1000ml / 瓶</li>
          <li>· 燕麥奶 每份 含糖 4.5 g｜10.0% 燕麥含量 ｜熱量 58 kcal</li>
          <li>· 鈣含量與牛奶相同</li>
          <li>· 生產燕麥奶比牛奶減少35 %的碳排放量,比杏仁少用85~90%的水量</li>
          <li>· 易形成奶泡適合咖啡店使用與拿鐵拉花</li>
          <li>
            <h2>NT$199</h2>元<h3>66折</h3>
          </li>
        </ul>
        <section className="button">
          <ul className="button__number">
            <label>數量</label>
            <li>
              <span></span>
              <input type="text" value={1} readOnly />
              <span></span>
            </li>
          </ul>
          <ul className="button__shopCart">
            <li></li>
            <li></li>
            <button>加入購物車</button>
          </ul>
        </section>
        <ul className="info">
          <li>
            <label>品牌</label>
            <section className="link">
              <a
                href="https://au.minorfigures.com/"
                rel="noreferrer"
                target="_blank"
              >
                Minor Figures
              </a>
            </section>
          </li>
          <li>
            <label htmlFor="">商品規格</label>
            <p>
              容量 : 1000ml / 瓶<span>原產地 : 英國</span>
            </p>
          </li>
          <li>
            <label htmlFor="">付款方式</label>
            <p>信用卡、貨到付款、LinePay、街口支付</p>
          </li>
          <li>
            <label htmlFor="">運送及運費</label>
            <span
              className={isDown ? 'down__btn downBtn' : 'down__btn upBtn'}
              onClick={handleDownList}
            ></span>
          </li>
          <ul className={isDown ? 'downList hidden' : 'downList '}>
            <li>
              <label htmlFor="">運送方式</label>
              <p>倉庫出貨</p>
            </li>
            <li>
              <label htmlFor="">運費</label>
              <ul className="downList__text">
                <li>
                  <label htmlFor="">宅配</label>
                  <p>
                    $80
                    <span>* 滿 $1,200 免運費</span>
                  </p>
                </li>
                <li>
                  <label htmlFor="">超商取貨-7-11</label>
                  <p>
                    $80
                    <span>* 滿 $1,200 免運費</span>
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </ul>
      </section>
    </article>
  );
};

export default ShopOder;
