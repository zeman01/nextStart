import { IUserResponse } from "./auth.types"
import { IProduct } from "./product.types"


export type IWishlist = {
    user: IUserResponse,
    product: IProduct,
    _id:string
}