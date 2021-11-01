import { NoEncryption } from '@mui/icons-material';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Slide, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import Layout from '../../components/common/Layout';
import CategoryFilter from '../../components/shop/CategoryFilter';
import ProductCard from '../../components/shop/ProductCard';
import SpeedDialTooltipOpen from '../../components/shop/SpeedDial';
import getCommerce from '../../utils/commerce';


export default function Shop(props) {
  const { products, categories } = props;

  //const allCategories = ['All', ...new Set(categories.map((category) => category.name))];
  const allCategories = [{"name": 'All'}, ...new Set(categories.map((category) => ({ "name": category.name, "img": category.assets[0].url })))];


  console.log(allCategories)

  const[productList, setProductList] = useState(products);

  const filter = (button) => {
    if(button === 'All') {
      setProductList(products);
      return;
    }
    const filteredData = products.filter(product => product.categories[0].name === button);
    setProductList(filteredData);
  }


  return (
    <Layout title="Shop" commercePublicKey={props.commercePublicKey} >
      {products.length === 0 && alert("no products")}
      {/* <CategoryFilter allCategories={allCategories} filter={filter} /> */}
          <Grid container spacing={1}>
            {productList.map((product) => (
              <Grid key={product.id} item md={3}>
                <ProductCard
                  permalink={product.permalink}
                  image={product.media.source}
                  name={product.name}
                  price={product.price.formatted_with_symbol}
                />
              </Grid>
            ))}
          </Grid>
      <SpeedDialTooltipOpen allCategories={allCategories} filter={filter} />
    </Layout>
  )
}

export async function getStaticProps() {
  const commerce = getCommerce();
  const { data: products } = await commerce.products.list();
  const { data: categories } = await commerce.categories.list();
  return {
    props: {
      products,
      categories,
    },
  };
}


// const allCategories = ['All', ...new Set(categories.map((category) => category.name))];

//const allCategories = [{"name": 'All'}, ...new Set(categories.map((category) => ({ "name": category.name, "img": category.assets[0].url })))];
