import { asyncHandler  } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Recipe } from "../models/recipe.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const createPost = asyncHandler( async (req, res) =>{
    const {title,
      description,
      process,
      advice,
      deviceUsed,
      genre,
      likeCount,
      createdAt,
      owner,} = req.body;
    console.log(title)
   
    const thumbnailLocalPath = req.files?.thumbnail[0]?.path;
    if (!thumbnailLocalPath) {
      throw new ApiError(400, "Thumbnail file is required")
    }

    const thumbnail = await uploadOnCloudinary(thumbnailLocalPath)
    if (!thumbnail) {
      throw new ApiError(400, "Thumbnail file is required")
    }

    const newPost = await Recipe.create({
      title,
      description,
      thumbnail: thumbnail.url,
      process,
      advice,
      deviceUsed,
      genre,
      likeCount,
      createdAt,
      owner,
  })
    // Save the post
    await newPost.save();
    return res.status(201).json(
      new ApiResponse(200, newPost, "Post created Successfully")
    )
  });

export{
  createPost,

}