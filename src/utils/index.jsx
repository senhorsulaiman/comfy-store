import axios, { Axios } from "axios";
const productionUrl = 'https://strapi-store-server.onrender.com/api';
// https://blog.logrocket.com/using-axios-set-request-headers/#installing-axios
export const customFetch = axios.create({

    baseURL: productionUrl,
})

export const formatPrice = (price) => {

    const dollarsAmount = new Intl.NumberFormat('en-US',
        {
            style: 'currency',
            currency: 'AED'
        }
    ).format(((price * 3.67) / 100).toFixed(2));
    return dollarsAmount
}
export const generateAmountOptions = (number) => {
    return Array.from({ length: number }, (_, index) => {
        const amount = index + 1
        return <option key={amount} value={amount}>{amount}</option>
    })
}