import { Card, CardActionArea, CardContent, CardMedia, Grid, Slide, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Layout from '../../components/common/Layout';
import ProductCard from '../../components/shop/ProductCard';
import SpeedDialTooltipOpen from '../../components/shop/SpeedDial';
import getCommerce from '../../utils/commerce';

export default function Shop(props) {
  const { products } = props;
  return (
    <Layout title="Shop" commercePublicKey={props.commercePublicKey} >
      {products.length === 0 && alert("no products bruh")}
      <Grid container spacing={1}>
       {products.map((product) => (
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
      <SpeedDialTooltipOpen />
    </Layout>
  )
}

export async function getStaticProps() {
  const commerce = getCommerce();
  const { data: products } = await commerce.products.list();
  return {
    props: {
      products,
    },
  };
}
