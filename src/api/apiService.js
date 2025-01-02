import axiosInstance from "./axiosInstance";

export const getApi = async (endpoint, params = {}) => {
    const response = await axiosInstance.get(endpoint, { params });
    return response.data;
  };
  
export const postApi = async (endpoint, data) => {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
};

export const putApi = async (endpoint, data) => {
    const response = await axiosInstance.put(endpoint, data);
    return response.data;
};

export const deleteApi = async (endpoint, data) => {
    const response = await axiosInstance.delete(endpoint, data);
    return response.data;
};
