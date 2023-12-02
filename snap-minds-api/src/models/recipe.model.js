import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const recipeSchema = new Schema(
    {
        // photoFile: {
        //     type: String, //cloudinary url
        //     required: true
        // },
        // userID:{
        //   type: String,
        //   required: true,
        // },
        title: {
          type: String, 
          required: true
        },
        thumbnail: {
            type: String, //cloudinary url
            required: true
        },
        description: {
            type: String, 
            required: true
        },
        process:{
          type: [String],
          required: true
        },
        advice:{
          type: String
        },
        deviceUsed:{
          type: String
        },
        genre:{
          type: Schema.Types.ObjectId,
          ref: "Genre"
        },
        // genre:{
        //   type: String,
        //   required: true,
        // },
        likeCount: {
            type: Number,
            default: 0
        },
        createdAt: {
            type: Date,
            default: new Date()
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }

    }, 
    {
        timestamps: true
    }
)

recipeSchema.plugin(mongooseAggregatePaginate)

export const Recipe = mongoose.model("Recipe", recipeSchema)