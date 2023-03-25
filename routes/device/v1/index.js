/**
 * index.js
 * @description :: index route file of device platform.
 */

const express =  require('express');
const router =  express.Router();
router.use('/device/auth',require('./auth'));
router.use(require('./Chat_messageRoutes'));
router.use(require('./CommentRoutes'));
router.use(require('./Chat_groupRoutes'));
router.use(require('./BlogRoutes'));
router.use(require('./userRoutes'));

module.exports = router;
