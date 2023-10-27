import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCTS=[
  {
    id:'p1',
    price:6,
    title:'My first Book',
    description:'The first book I wrote.'
  },
  {
    id:'p2',
    price:87,
    title:'My 2 Book',
    description:'The first book I wrote.'
  },
  {
    id:'p3',
    price:43,
    title:'My 3vBook',
    description:'The first book I wrote.'
  },
  {
    id:'p4',
    price:8,
    title:'My 4 Book',
    description:'The first book I wrote.'
  },
  {
    id:'p5',
    price:634,
    title:'My 5 Book',
    description:'The first book I wrote.'
  },
  {
    id:'p6',
    price:326,
    title:'My 6 Book',
    description:'The first book I wrote.'
  },
  {
    id:'p7',
    price:326,
    title:'My f7 Book',
    description:'The first book I wrote.'
  },
  {
    id:'p8',
    price:656,
    title:'My 8 Book',
    description:'The first book I wrote.'
  },
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {DUMMY_PRODUCTS.map(item=>(
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
