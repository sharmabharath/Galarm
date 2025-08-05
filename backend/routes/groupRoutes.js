const express = require('express');
const groupController = require('../controllers/groupController');

const router = express.Router();

router.post('/', groupController.createGroup);
router.post('/:id/invite', groupController.inviteUser);
router.post('/:id/accept', groupController.acceptInvite);
router.post('/:id/alarms', groupController.addAlarm);

module.exports = router;
