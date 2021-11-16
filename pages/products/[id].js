import { Container, Grid, Grow, Toolbar } from "@mui/material";
import React from "react";
import Layout from "../../components/common/Layout";
import ProductDescription from "../../components/shop/ProductDescription";
import SmallCarousel from "../../components/shop/SmallCarousel";
import getCommerce from "../../utils/commerce";
import { StyledImg } from "../../utils/styles";


export default function Product(props) {
    const { product } = props;
    //console.log( {product} );

    const reduceProductImages = product => {
        const { assets, media } = product;
        const images = [];
      
        if (media && media.type === 'image') {
          images.push(media.source);
        }
      
        if (assets && Array.isArray(assets)) {
          return images.concat(assets.reduce((acc, asset) => {
            if (!asset.is_image || asset.url === media.source) {
              return acc;
            }
      
            return [...acc, asset.url];
          }, []));
        }
      
        return images;
    };

    const images = reduceProductImages(product);
    return (
        <Layout title={product.name} commercePublicKey={props.commercePublicKey}>
            <Toolbar />
            <Container maxWidth="xl">
                <Grid container justifyContent="space-between" spacing={3}>
                    <Grid item xs={12} sm={1}>
                        <SmallCarousel images={images} />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Grow in>
                            <Container maxWidth="sm" >
                                {Array.isArray(images) && (images.map((image, i) => (
                                    <StyledImg
                                        key={i}
                                        src={image}
                                        alt={product.name}
                                    />
                                )))}
                            </Container>
                        </Grow>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <ProductDescription name={product.name} description={product.description} />  
                    </Grid>

                </Grid>
            </Container>
        </Layout>
    )
}

export async function getServerSideProps({ params }) {
    const { id } = params;
    const commerce = getCommerce();
    const product = await commerce.products.retrieve( id, {
        type: 'permalink',
    });
    return {
        props: {
            product,
        }
    }
}