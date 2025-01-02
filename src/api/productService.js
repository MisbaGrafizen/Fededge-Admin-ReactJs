import { getApi, postApi } from "./apiService";

export const fetchProducts = async () => {
    try {
      const response = await getApi(`/admin/product`);
      return response;
    } catch (error) {
      console.error('Error fetching products:', error.message);
      throw error;
    }
  };

export const fetchProductById = async (productId) => {
    try {
      const response = await getApi(`/admin/product/${productId}`);
      return response;
    } catch (error) {
      console.error('Error fetching products:', error.message);
      throw error;
    }
  };

export const fetchCategories = async () => {
  console.log('apicalledd');
  try {
    const response = await getApi(`/admin/category`);
    console.log('response', response)
    return response;
  } catch (error) {
    console.error('Error fetching category:', error.message);
    throw error;
  }
};

export const addCategory = async (categoryData) => {
  try {
    const response = await postApi(`/admin/category`, categoryData);
    return response;
  } catch (error) {
    console.error('Error adding category:', error.message);
    throw error;
  }
};



