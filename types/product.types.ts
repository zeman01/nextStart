import { IBrand } from "./brand.types";
import { ICategory } from "./category.types";
import { IImage } from "./global.types";


type Product = {
    name: string,
    price: number,
    stock: number,
    description: string,
    new_arrival: boolean,
    is_featured: boolean,
}

// IProductInput

export type IProductInput = Product & {
    cover_image: File,
    images: File[],
    category: string,
    brand:string
}


export type IProduct = {
    _id: string;
    cover_image: IImage
    images: IImage[],
    category: ICategory,
    brand:IBrand
} & Product