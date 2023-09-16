import axios from "axios";

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategory = async (id) => {
    try {
        const data = await axios.get(`${url}/${id}`);
        return data.data;
    } catch (e) {
        console.log(e);
    }
}

export default getCategory;