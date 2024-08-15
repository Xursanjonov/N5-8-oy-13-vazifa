import { model, Schema } from "mongoose"
import Joi from 'joi'

const productSchema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    oldPrice: { type: Number, required: false, default: 0 },
    stock: { type: Number, required: false, default: 0 },
    rating: { type: Number, required: false, default: 0 },
    views: { type: Number, required: false, default: 0 },
    categoryId: { type: Object, required: true, default: {} },
    adminId: { type: Object, required: true, default: {} },
    units: { type: String, required: false, default: "" },
    description: { type: String, required: true },
    urls: { type: Array, required: false, default: [] },
    info: { type: Array, required: false, default: [] },
    available: { type: Boolean, default: true }
}, { timestamps: true })
export const Products = model('exam-product', productSchema)
export const validateProduct = (body) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        price: Joi.number().required(),
        oldPrice: Joi.number().allow(0),
        stock: Joi.number().allow(0),
        rating: Joi.number().allow(0),
        views: Joi.number().allow(0),
        categoryId: Joi.object().allow({}),
        adminId: Joi.object().allow({}),
        units: Joi.string().allow(""),
        description: Joi.string().required(),
        urls: Joi.array(),
        info: Joi.array(),
        available: Joi.boolean().allow(true)
    })
    return schema.validate(body)
}