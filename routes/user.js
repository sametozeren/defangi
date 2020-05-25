const expres = require('express');
const router = expres.Router();
const UserService = require('../services/UserService');

router.get('/all', async (req, res) => {
    const result = await UserService.findOne();
console.log(result+'adsasdasdasdasdas user ')
    res.send(result);
});

module.exports = router;