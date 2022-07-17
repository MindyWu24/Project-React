const Step2 = ({ handleStepBtn, step }) => {
  return (
    <article className={step == 2 ? 'step2' : 'step2 hidden'}>
      <ul className="step2__timebar">
        <li></li>
        <hr />
        <li>2</li>
        <hr />
        <li>3</li>
      </ul>
      <section className="step2__transport">
        <ul className="checkBox">
          <li>
            <input type="checkbox" id="choose" />
            <label className="check" htmlFor="choose">
              <span></span>
              <p>信用卡付款</p>
            </label>
          </li>
          <li className="store">
            <input type="checkbox" id="choose2" />
            <label className="check" htmlFor="choose2">
              <span></span>
              <p>貨到付款</p>
            </label>
          </li>
        </ul>
        <section className="cardnumber">
          <label htmlFor="">卡號</label>
          <input type="text" placeholder="卡號" />
          <p>可接受之卡片</p>
          <figure>
            <span></span>
            <span></span>
            <span> </span>
          </figure>
        </section>
        <section className="cardsecurity">
          <ul>
            <li>
              <label htmlFor="">到期日</label>
              <input type="text" placeholder="MM/YY" />
            </li>
            <li>
              <label htmlFor="">CVC 安全碼</label>
              <input type="text" placeholder="安全碼" />
            </li>
          </ul>
          <form>
            <label htmlFor="">持卡人姓名</label>
            <input type="text" placeholder="請輸入持卡人姓名" />
          </form>
          <form className="forget">
            <input
              className="forget__input"
              type="checkbox"
              name=""
              id="remember"
            />
            <label className="forget__label" htmlFor="remember"></label>
            <span>記住我的卡片資訊</span>
          </form>
        </section>
      </section>
      <button className="step2__connect" value={3} onClick={handleStepBtn}>
        確認付款
      </button>
    </article>
  );
};

export default Step2;
