var express = require('express');
var router = express.Router();
const skillController = require('../controllers/skills'); // importing controller

/* GET users listing. */

router.get('/', skillController.index);
router.get('/new', skillController.new);
router.get('/:name', skillController.show);
router.post('/', skillController.create);
router.delete('/:name', skillController.delete);
module.exports = router;
