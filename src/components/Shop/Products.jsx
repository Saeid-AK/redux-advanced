import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [
  {
    id: 'p1',
    price: 6,
    title: 'First product',
    description: 'This is a first product',
  },
  {
    id: 'p2',
    price: 4,
    title: 'Second product',
    description: 'This is a second product',
  },
];

const Products = props => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
