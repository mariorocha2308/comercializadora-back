'use strict';

const router = require('express').Router();
const { postPromotion } = require("./promotionService");

router.post('/create/promotion', postPromotion);

module.exports = router;