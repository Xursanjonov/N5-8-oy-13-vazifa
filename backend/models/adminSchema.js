import { model, Schema } from "mongoose"
import Joi from 'joi'

const adminSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: false,
        default: ""
    },
    phone: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: false,
        default: 'admin'
    },
    username: {
        type: String,
        required: false,
        default: ""
    },
    password: {
        type: String,
        required: true
    },
    hashPassword: {
        type: String,
        required: false
    },
    isActive: {
        type: Boolean,
        required: false,
        default: true
    }
}, { timestamps: true })

export const Admin = model('exam-admin', adminSchema)

export const validateAdmin = (body) => {
    const schema = Joi.object({
        fname: Joi.string().required(),
        lname: Joi.string().allow(""),
        phone: Joi.string().required(),
        role: Joi.string().allow("admin"),
        username: Joi.string().allow(""),
        password: Joi.string().required(),
        hashPassword: Joi.string(),
        isActive: Joi.boolean().allow(true)
    })
    return schema.validate(body)
}