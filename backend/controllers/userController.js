const User = require('../schemas/User');

exports.signup = async (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: 'username required' });
  try {
    const user = new User({ username, groups: [] });
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'failed to create user' });
  }
};
