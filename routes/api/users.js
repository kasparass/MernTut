const express = require('express');
const router = express.Router();
const {validationResult, check } = require('express-validator');

// @route    Post api/users
// @desc     Register route
// @access   Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6, max: 40 }),
  ],
  (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    console.log(req.body);
    res.send('Users route');
  }
);

module.exports = router;
