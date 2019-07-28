import { me, userCreate } from "../controller/userController";
import { productList, product, productCreate, productUpdate } from "../controller/productController";
import { GraphQLUpload, UploadOptions } from 'graphql-upload';
import { Upload } from "../types/Upload";
import { createWriteStream } from "fs";
import { uploadImage } from "../controller/uploadController";

export const root = {
    Upload: GraphQLUpload,
    me: me,
    productList: productList,
    product: product,
    createUser: userCreate,
    createProduct: productCreate,
    updateProduct: productUpdate,
    uploadSingleFile: uploadImage
}