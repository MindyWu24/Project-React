import { useState } from 'react';
import Cart from './Components/ShopCart/Cart';
import Step1 from './Components/ShopCart/Step1';
import Step2 from './Components/ShopCart/Step2';
import Step3 from './Components/ShopCart/Step3';

const ShopCart = () => {
  const [step, setStep] = useState(1);
  const handleStepBtn = (e) => {
    setStep(e.target.value);
  };

  const [number, setNumber] = useState(0);
  const handleIncreaseNumber = () => {
    setNumber(number + 1);
  };
  const handleDecreaseNumber = () => {
    number > 0 && setNumber(number - 1);
  };

  const price = 209;
  const total = price * number;

  return (
    <main className="ShopCart">
      <article className="ShopCart__list">
        <h1>購物車</h1>
        <ul className="carts">
          <Cart
            handleIncreaseNumber={handleIncreaseNumber}
            handleDecreaseNumber={handleDecreaseNumber}
            number={number}
            price={price}
          />
        </ul>
        <section className="carts__total">
          <ul>
            <li>
              <label htmlFor="">商品小計</label>
              <p>NT${total} 元</p>
            </li>
            <li>
              <label htmlFor="">運費</label>
              <p>NT$80 元</p>
            </li>
            <li>
              <label htmlFor="">總計</label>
              <p>
                NT${total}
                <span>元</span>
              </p>
            </li>
          </ul>
        </section>
      </article>
      <aside className="ShopCart__steps">
        <Step1 handleStepBtn={handleStepBtn} step={step} />
        <Step2 handleStepBtn={handleStepBtn} step={step} />
        <Step3 handleStepBtn={handleStepBtn} step={step} total={total} />
      </aside>
    </main>
  );
};

export default ShopCart;
