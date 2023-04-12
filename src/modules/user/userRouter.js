'use strict';

const router = require('express').Router();
const { authLogin } = require("./userService");

router.post('/login', authLogin);

module.exports = router;