import axios from "axios";
import qs from 'query-string'

const url = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProducts = async (query) => {
    const URL = qs.stringifyUrl({
        url: url,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured
        }
    });

    try {
        const data = await axios.get(URL);
        return data.data;
    } catch (e) {
        console.log(e);
    }
}

export default getProducts;