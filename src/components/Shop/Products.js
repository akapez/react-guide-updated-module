import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DATA = [
  { id: 'p1', price: 6, title: 'My first book.', description: 'Sample book' },
  {
    id: 'p2',
    price: 4,
    title: 'My second book.',
    description: 'Sample book 2',
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DATA.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
