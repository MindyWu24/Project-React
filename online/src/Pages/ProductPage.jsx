import Aside from './Components/ProductPage/Aside';
import Intro from './Components/ProductPage/Intro';
import { v4 as uuidv4 } from 'uuid';
import { introList } from '../lib/introList';
import Footer from './Components/Footer';

const ProductPage = () => {
  return (
    <>
      <main className="ProductPage">
        <Aside />
        {introList.map((item) => (
          <Intro key={uuidv4()} item={item} />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
