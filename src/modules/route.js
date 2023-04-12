'use strict';
const { Router } = require('express');
const userRoute = require('./user/userRouter');
const promotionRoute = require('./promotion/promotionRouter');
const router = Router();

const init = () => {
    // *** register routes here *** //
    router.use('/users', userRoute);
    router.use('/promotions', promotionRoute);
    return router;
};

module.exports = {init};