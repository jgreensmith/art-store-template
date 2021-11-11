import { Card, CardActionArea, CardContent, CardMedia, Grid, Link, Slide, Stack, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Masonry from '@mui/lab/Masonry';
import { useState } from 'react';
import Layout from '../components/common/Layout';
import CategoryFilter from '../components/shop/CategoryFilter';
import ProductCard from '../components/shop/ProductCard';
import SpeedDialTooltipOpen from '../components/shop/SpeedDial';
import getCommerce from '../utils/commerce';


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
                <Slide direction="up" in={true}>
                  <Card>
                    <Link href={`/products/${product.permalink}`} >
                      <CardActionArea>
                          <CardMedia
                              component="img"
                              alt={product.name}
                              image={product.media.source}
                          />
                          <CardContent>
                              <Typography
                              gutterBottom
                              variant="body2"
                              color="textPrimary"
                              component="p"
                              >
                              {product.name}
                              </Typography>
                              <Box>
                              <Typography
                                  variant="body1"
                                  color="textPrimary"
                                  component="p"
                              >
                                {product.price.formatted_with_symbol}
                              </Typography>
                              </Box>
                          </CardContent>
                      </CardActionArea>

                      {/* <ProductCard
                        permalink={product.permalink}
                        image={product.media.source}
                        name={product.name}
                        price={product.price.formatted_with_symbol}
                      /> */}
                    </Link>
                  </Card>
                </Slide>
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
