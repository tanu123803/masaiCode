const express = require('express');
const { 
  createUser, 
  addAddress, 
  getUserDetails, 
  getUserSummary, 
  deleteAddress 
} = require('../controllers/user.controller');

const router = express.Router();

router.post('/', createUser);
router.post('/:userId/address', addAddress);
router.get('/summary', getUserSummary);
router.get('/:userId', getUserDetails);
router.delete('/:userId/address/:addressIndex', deleteAddress); // Bonus

module.exports = router;
