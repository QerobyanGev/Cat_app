import axiosInstance from '../axios/axiosConfig';

const getImages = async ({
	pageNum = 1,
	categoryId = JSON.parse(localStorage.getItem('chosenCategory')) || '',
}) => {
	try {
		const res = await axiosInstance.get(
			`https://api.thecatapi.com/v1/images/search?limit=10&page=${pageNum}&category_ids=${categoryId}`
		);
		return res.data;
	} catch (error) {
		return error.message;
	}
};

export default getImages;
