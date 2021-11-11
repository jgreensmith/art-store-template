import React from "react";
import Layout from "../../components/common/Layout";
import getCommerce from "../../utils/commerce";


export default function Product(props) {
    const { product } = props;
    console.log( {product} )
    return (
        <Layout title={product.name} commercePublicKey={props.commercePublicKey}>
            <h1>{product.name}</h1>
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