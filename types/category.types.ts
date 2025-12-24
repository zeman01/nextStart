import { IImage } from "./global.types"

export type ICategory=  {
        _id: string,
        name: string,
        description: string,
        image:IImage
    }