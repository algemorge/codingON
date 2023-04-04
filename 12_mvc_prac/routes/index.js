const express = require("express");
const controller = require("../controller/Cmain")
const router = express.Router();

router.get('/', controller.main)
router.post('/practice2', controller.practice2)

module.exports = router;