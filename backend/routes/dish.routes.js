const express = require('express');
const router = express.Router();

const {
    index,
    getDishes,
    getDish,
    setDish,
    deleteDish,
    updateDish
} = require('../controllers/dish.controller');

    router.get ('/hi', index);
    router.get ('/getDishes', getDishes );
    router.get ('/getDish/:id?', getDish );
    router.post ('/setDish', setDish );
    router.delete ('/deleteDish/:id?', deleteDish);
    router.put ('/updateDish/:id?', updateDish);

module.exports = router;