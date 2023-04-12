'use strict';

const router = require('express').Router();
const { createPromotion } = require("./promotionService");

router.post('/create', createPromotion);

module.exports = router;