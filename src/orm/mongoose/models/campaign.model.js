const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  content: { type: String, required: true },
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
  },
  createBy: { type: String, required: true },
  createDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Campaign', campaignSchema);
