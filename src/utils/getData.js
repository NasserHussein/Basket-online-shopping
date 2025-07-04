import axios from "axios";

export const getData = async (type, category = null) => {
	const {
		data: { data },
	} = await axios.get(`https://ecommerce.routemisr.com/api/v1/${type}${
		category ? "?category=" + category : ""
	}
    `);

	return data;
};
