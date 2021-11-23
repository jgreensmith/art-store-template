import { Container, Grid, Grow, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Layout from "../../components/common/Layout";
import ProductDescription from "../../components/shop/ProductDescription";
import getCommerce from "../../utils/commerce";
import { StyledImg, ThumbnailButton } from "../../utils/styles";


export default function Product(props) {
    const { product } = props;
    const [mainImage, setMainImage] = useState(product.image.url);

    //set main img src from image thumbnails with default state from product props.

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

    const onClickImage = (img) => {
        setMainImage(img);
    }
    return (
        <Layout title={product.name} commercePublicKey={props.commercePublicKey}>
            <Toolbar />
            <Container maxWidth="xl">
                <Grid container justifyContent="space-between" spacing={3}>
                    <Grid item xs={12} sm={1}>
                        {Array.isArray(images) && (images.map((image, i) => (
                            <ThumbnailButton 
                                key={i}
                                sx={{
                                    background: `url("${image}") center center/cover`,
                                    display: { xs: 'none', sm: 'block' },
                                }}
                                onClick={ () => onClickImage(image)} 
                            />
                        )))}
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Grow in>
                            <Container maxWidth="sm" >
                                <StyledImg
                                    src={mainImage}
                                    alt={product.name}
                                    className="main-image-id"
                                    sx={{ display: { xs: 'none', sm: 'block' } }}
                                /> 
                                <Box sx={{ display: { xs: 'flex', sm: 'none' }, overflowX: 'scroll' }} >
                                    {Array.isArray(images) && (images.map((image, i) => (
                                        <StyledImg
                                            key={i}
                                            src={image}
                                            alt={product.name}
                                            className="main-image-id"
                                            sx={{ marginRight: 5 }}
                                        />  
                                    )))} 
                                </Box>
                            </Container>
                        </Grow>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <ProductDescription 
                            name={product.name} 
                            description={product.description}
                            price={product.price.formatted_with_symbol} 
                            inventory={product.inventory.available}
                            commercePublicKey={props.commercePublicKey}
                            product={product}
                        />  
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