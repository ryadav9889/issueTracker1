const mongoose = require('mongoose');

// creating issue scchema
const issueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    author: {
      type: String,
      trim: true,
      required: true,
    },
    id:{
    type:String,
    required:true
    },
    labels: [
      {
        type: String,
        trim: true,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// creating modal
const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;