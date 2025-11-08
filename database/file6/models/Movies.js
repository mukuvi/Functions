import mongoose from "mongoose";
//schema
const moviesSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

//model
const movieModel = mongoose.model("Movie", moviesSchema);
//create new doc
const createDoc = async () => {
  try {
    const m1 = new movieModel({
      name: "Extraction 2",
      ratings: 4,
      money: 6000,
      genre: ["action", "adventure"],
      isActive: true,
      comments: [{ value: "That was an amazing movie" }],
    });
    const result = await m1.save();
  } catch (error) {
    console.log(error);
  }
};
export default movieModel;
