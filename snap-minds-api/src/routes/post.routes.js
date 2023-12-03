import { Router } from "express";
import { createPost, getFeedPosts } from "../controllers/post.controller.js";
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

router.route("/allpost").post(getFeedPosts)


export default router

