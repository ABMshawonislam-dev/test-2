import mongoose from "mongoose"
const { Schema } = mongoose

const detailsSchema = Schema({
  task: String,
  durationtime: String,
  date: String,
})

const schemadetail = mongoose.model("tododata", detailsSchema)

export default schemadetail
