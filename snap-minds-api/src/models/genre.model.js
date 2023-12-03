import mongoose, {Schema} from "mongoose";

const genreSchema = new Schema({
  _id: {
    type: Schema.ObjectId,
    auto: true
  },
  genreName:{
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true
  },
  posts:[
    {
      type: Schema.Types.ObjectId,
      ref: 'Recipe'
    }
  ]
}, {timestamps:true})

export const Genre = mongoose.model("Genre", genreSchema)