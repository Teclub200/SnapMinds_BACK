import { Router } from "express";
import { createPost } from "../controllers/post.controller.js";
import {upload} from "../middlewares/multer.middleware.js"


const router = Router()

router.route("/post").post(
    upload.fields([
        {
            name: "thumbnail",
            maxCount: 1
        }, 
    ]),
    createPost
  )



export default router

