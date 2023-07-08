const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home_controller');

// home router
router.get('/', homeController.home);
// user router
router.use('/users',require('./users'))









// exporting router
module.exports = router;