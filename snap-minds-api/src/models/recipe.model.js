import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const recipeSchema = new Schema(
    {
        // photoFile: {
        //     type: String, //cloudinary url
        //     required: true
        // },
        thumbnail: {
            type: String, //cloudinary url
            required: true
        },
        title: {
            type: String, 
            required: true
        },
        description: {
            type: String, 
            required: true
        },
        tags:{
          type: [String],
          required: true
        },
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
            ref: "User"
        }

    }, 
    {
        timestamps: true
    }
)

recipeSchema.plugin(mongooseAggregatePaginate)

export const Recipe = mongoose.model("Recipe", recipeSchema)