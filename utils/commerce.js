import Commerce from '@chec/commerce.js';

let commerce = null;

function getCommerce(commercePublicKey) {
    if (commerce) {
        return commerce;
    } else { 
        const publicKey = commercePublicKey || process.env.COMMERCE_PUBLIC_KEY;
        const devEnvironment = process.env.NODE_ENV === 'development';
        const commerceConfig = {
            axiosConfig: {
              headers: {
                'X-Chec-Agent': 'commerce.js/v2',
                'Chec-Version': '2021-03-10',
              },
            },
        };
        if (devEnvironment && !publicKey) {
            throw Error('Commerce public API key not found');
        }
        commerce = new Commerce(publicKey, devEnvironment, commerceConfig);
        return commerce;
    }
}

//each time getCommerce is used in a component, a new instance of Commerce is created! 

export default getCommerce;