'use strict';

const router = require('express').Router();
const { authLogin, createModerator, updateModerator, deleteModerator, getModerators } = require("./userService");

router.post('/login', authLogin);
router.get('/all', getModerators);
router.post('/create', createModerator);
router.put('/update/:id', updateModerator);
router.delete('/delete/:id', deleteModerator);


module.exports = router;