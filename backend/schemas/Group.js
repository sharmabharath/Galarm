const mongoose = require('mongoose');

const AlarmSchema = new mongoose.Schema({
  time: { type: Date, required: true },
  label: String
});

const GroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  invites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  alarms: [AlarmSchema]
});

module.exports = mongoose.model('Group', GroupSchema);
