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
        process:[
          {
            subProcess:{
              type: String,
              required: true
            }
          }
        ],
        advice:{
          type: String
        },
        deviceUsed:{
          type: String
        },
        genre:{
          type: String,
          required: true,
          subGenre:[
            {
              name:{
                type: String,
                reqired: true,
              },
            }
          ]
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