import mongoose, {Schema} from "mongoose";

const genreSchema = new Schema({
  id: {
    type: String,
    required : true,
  },
  genreName:{
    type: String,
    required: true,
  },
  // subGenre:[
  //   {
  //     id:{
  //       type: String,
  //       require: true,
  //     },
  //     subGenereName:{
  //       type: String,
  //       require: false,
  //     }
  //   }
  // ]
}, {timestamps:true})

export const Genre = mongoose.model("Genre", genreSchema)