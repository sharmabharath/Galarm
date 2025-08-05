const Group = require('../schemas/Group');
const User = require('../schemas/User');

exports.createGroup = async (req, res) => {
  const { name, ownerId } = req.body;
  if (!name || !ownerId) return res.status(400).json({ error: 'name and ownerId required' });
  try {
    const group = new Group({ name, owner: ownerId, members: [ownerId], invites: [], alarms: [] });
    await group.save();
    await User.findByIdAndUpdate(ownerId, { $push: { groups: group._id } });
    res.json(group);
  } catch (err) {
    res.status(500).json({ error: 'failed to create group' });
  }
};

exports.inviteUser = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  try {
    const group = await Group.findById(id);
    if (!group) return res.status(404).json({ error: 'group not found' });
    if (!group.invites.includes(userId) && !group.members.includes(userId)) {
      group.invites.push(userId);
      await group.save();
    }
    res.json({ invited: userId });
  } catch (err) {
    res.status(500).json({ error: 'failed to invite user' });
  }
};

exports.acceptInvite = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  try {
    const group = await Group.findById(id);
    if (!group) return res.status(404).json({ error: 'group not found' });
    const inviteIndex = group.invites.indexOf(userId);
    if (inviteIndex === -1) return res.status(400).json({ error: 'no invitation' });
    group.invites.splice(inviteIndex, 1);
    group.members.push(userId);
    await group.save();
    await User.findByIdAndUpdate(userId, { $push: { groups: id } });
    res.json({ joined: id });
  } catch (err) {
    res.status(500).json({ error: 'failed to join group' });
  }
};

exports.addAlarm = async (req, res) => {
  const { id } = req.params;
  const { time, label } = req.body;
  try {
    const group = await Group.findById(id);
    if (!group) return res.status(404).json({ error: 'group not found' });
    group.alarms.push({ time, label });
    await group.save();
    const alarm = group.alarms[group.alarms.length - 1];
    res.json(alarm);
  } catch (err) {
    res.status(500).json({ error: 'failed to add alarm' });
  }
};
