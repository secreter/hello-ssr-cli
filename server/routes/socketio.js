/**
* Created by pengchaoyang on 2018/5/22
*/
const Router = require('koa-router');
const socketController = require('../controllers/home');

const router = new Router({
    prefix: '/api/socket'
});

router.get('/',socketController.test);

module.exports = router;
