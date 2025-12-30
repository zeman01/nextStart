/*eslint-disable @typescript-eslint/no-explicit-any */
import api from ".";

// ! get all categories

export const getAllCategories = async () => {
  try {
    const response = await api.get("/categories");
    return response.data;
  } catch (error: any) {
    throw error?.response.data;
  }
};
