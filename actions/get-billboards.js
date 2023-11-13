import axios from "axios";

const url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async () => {
  try {
    let { data } = await axios.get(url);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export default getBillboards;
