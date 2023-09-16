import axios from "axios";

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategories = async () => {
    try {
        const data = await axios.get(url);
        return data.data;
    } catch (e) {
        console.log(e);
    }
}

export default getCategories;