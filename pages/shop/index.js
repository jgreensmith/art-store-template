import { NoEncryption } from '@mui/icons-material';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Slide, Stack, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Masonry from '@mui/lab/Masonry';
import { useState } from 'react';
import Layout from '../../components/common/Layout';
import CategoryFilter from '../../components/shop/CategoryFilter';
import ProductCard from '../../components/shop/ProductCard';
import SpeedDialTooltipOpen from '../../components/shop/SpeedDial';
import getCommerce from '../../utils/commerce';


export default function Shop(props) {
  const { products, categories } = props;

  const allCategories = [{"name": 'All', "img": "/images/boom.png"}, ...new Set(categories.map((category) => (
    { 
      "name": category.name, 
      "img": category.assets[0].url 
    }
  )))];
  //map over categories API and list in array of objects with 'all'

  const[productList, setProductList] = useState(products);

  const filter = (button) => {
    if(button === 'All') {
      setProductList(products);
      return;
    }
    const filteredData = products.filter(product => product.categories[0].name === button);
    setProductList(filteredData);
  }

  //match category button (allCategories) to product categories and filter


  return (
    <Layout title="Shop" commercePublicKey={props.commercePublicKey} >
      {products.length === 0 && alert("no products")}
      <CategoryFilter allCategories={allCategories} filter={filter} />
      <Toolbar sx={{ display: { sm: 'none'} }} />
          <Masonry columns={{ xs: 1, vs: 2, sm: 3, md: 4}} spacing={2}>
            {productList.map((product) => (
              <Stack key={product.id}>
                <ProductCard
                  permalink={product.permalink}
                  image={product.media.source}
                  name={product.name}
                  price={product.price.formatted_with_symbol}
                />
              </Stack>
            ))}
          </Masonry>
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
