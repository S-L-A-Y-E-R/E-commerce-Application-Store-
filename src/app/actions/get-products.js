import axios from "axios";
import qs from 'query-string'

const url = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProducts = async (query) => {
    const URL = qs.stringify({
        URL: url,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured
        }
    });

    try {
        const data = await axios.get(url);
        return data.data;
    } catch (e) {
        console.log(e);
    }
}

export default getProducts;