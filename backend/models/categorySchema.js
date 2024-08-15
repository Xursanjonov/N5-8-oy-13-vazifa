import { model, Schema } from "mongoose";
import Joi from "joi";

const categorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    adminId: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const Category = model('exam-category', categorySchema)

export const validateCategory = (body) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        adminId: Joi.string().required()
    })
    return schema.validateCategory(body)
}