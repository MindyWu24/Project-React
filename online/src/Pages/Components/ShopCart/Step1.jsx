const Step1 = ({ handleStepBtn, step }) => {
  return (
    <article className={step == 1 ? 'step1' : 'step1 hidden'}>
      <ul className="step1__timebar">
        <li>1</li>
        <hr />
        <li>2</li>
        <hr />
        <li>3</li>
      </ul>
      <ul className="step1__transport">
        <li>
          <label htmlFor="">宅配</label>
          <h3>$80</h3>
        </li>
        <li className="store">
          <label htmlFor="">7-11</label>
          <h3>$80</h3>
        </li>
        <li className="store">
          <input type="checkbox" id="select1" />
          <label className="check" htmlFor="select1">
            <span></span>
          </label>
          <form>
            <p>桂林門市</p>
            <span>王XX (+886) 966 303 745</span>
            <span>台北市萬華區桂林路156號</span>
          </form>
        </li>
        <li className="store">
          <input type="checkbox" id="select" />
          <label className="check" htmlFor="select">
            <span></span>
          </label>
          <form>
            <p>桂林門市</p>
            <span>王XX (+886) 966 303 745</span>
            <span>台北市萬華區桂林路156號</span>
          </form>
        </li>
        <li className="store">
          <h2>新增7-11門市</h2>
        </li>
      </ul>
      <button className="step1__connect" value={2} onClick={handleStepBtn}>
        確認
      </button>
    </article>
  );
};

export default Step1;
