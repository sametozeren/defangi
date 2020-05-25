const ConsoleResult = require('../messages/ConsoleResult');
const expres = require('express');
const router = expres.Router();
const UserService = require('../services/UserService');
const {
    UserMiddleware
} = require('../middleware/index');

// Production da olması gerekmeyebilir.
router.get('/getAll', async (req, res) => {
    res.json(await UserService.getAll());
});

router.get('/get', async (req, res) => {
    res.json(await UserService.getById()); //TODO: res.params|| req.query ex.
});

router.post('/new', [UserMiddleware.isUserExists, UserMiddleware.isEmailExists, UserMiddleware.passwordHash], async (req, res) => {
    res.json(await UserService.add(req.body)); //TODO: res.params|| req.query ex.
});

router.post('/update', async (req, res) => {
    res.json(await UserService.update()); //TODO: res.params|| req.query ex.
});

router.delete('/delete', async (req, res) => {
    res.json(await UserService.add()); //TODO: res.params|| req.query ex.
});

module.exports = router;