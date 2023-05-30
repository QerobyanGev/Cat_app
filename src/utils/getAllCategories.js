import axiosInstance from '../axios/axiosConfig';

const getAllCategories = async () => {
	try {
		const res = await axiosInstance.get('/categories');
		return res.data;
	} catch (error) {
		return error.message;
	}
};

export default getAllCategories;
