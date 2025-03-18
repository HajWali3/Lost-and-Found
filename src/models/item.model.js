import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const itemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    category: {
      type: String,
      enum: ["Electronics", "Documents", "Accessories", "Others"],
      required: true, //
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      default: "lost",
      enum: ["lost", "found", "claimed"],
    },
    itemImage: {
      type: String, // Cloudinary URL
      default: "", // Made optional
    },
    dateLostOrFound: {
      type: Date,
      required: true,
    },
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

videoSchema.plugin(mongooseAggregatePaginate);

export default mongoose.model("Item", itemSchema);
