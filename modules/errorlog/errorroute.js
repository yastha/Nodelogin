var express = require("express"),
    router = express.Router(),
    controller = require("../errorlog/errorcontroller");
    

//router.post('/post/', controller.post);
router.get('/get/', controller.getAll);

module.exports = router;