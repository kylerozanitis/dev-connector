// Just to deal with authentication
const express = require('express');
const router = express.Router();

// @route   GET to api/users/test
// @desc    Tests users route
// @access  Private
router.get('/test', (req, res) => res.json({ msg: 'Users works.' }));

module.exports = router;
