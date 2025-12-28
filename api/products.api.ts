/*eslint-disable @typescript-eslint/no-explicit-any */
import api from "."

// ! get all new arrivals

export const getAllNewArrivals = async ()=>{
    try {
        const response = await api.get("/products/new_arrivals")
        return response.data
    } catch (error:any) {
        throw error?.response.data
    }
}

// ! get all featured products

export const getAllFeaturedProducts = async ()=>{
    try {
        const response = await api.get("/products/featured")
        return response.data
    } catch (error:any) {
        throw error?.response.data
    }
}