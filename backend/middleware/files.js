import multer from "multer";
import { v4 } from "uuid";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./files")
    },
    filename: (req, file, cb) => {
        cb(null, v4() + "~" + file.originalname)
    }
})

export const fileCreate = multer({ storage })