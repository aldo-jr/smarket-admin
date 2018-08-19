import Axios from 'axios';

export const getProductsList = (user) => {
    return new Promise((resolve, reject) => {
        Axios.get('https://supermarketplaceapi20180818102410.azurewebsites.net/api/product')
        .then(res => {
            resolve(res)
        })
    })
}