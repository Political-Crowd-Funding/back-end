const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

//all users
router.get('/all',(req,res) =>{
     userService.getAll().then(data => res.status(200).json(data)).catch(err => res.status(500).json(err));
})

module.exports = router;