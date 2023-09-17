const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const TodoSchema = new Schema(
  {
    task: String,
    textarea: String,
  },
  {
    timestamps: true,
  }
);

const TodoModel = model("Todo", TodoSchema);
module.exports = TodoModel;
