const expres = require('express');
const router = expres.Router();
const UserService = require('../services/UserService');

router.get('/getAll', async (req, res) => {
    res.send(await UserService.getAll());
});

router.get('/get', async (req, res) => {
    res.send(await UserService.getById()); //TODO: res.params|| req.query ex.
});

router.post('/new', async (req, res) => {
    res.send(await UserService.add(req.body));
});

router.post('/update', async (req, res) => {
    res.send(await UserService.update()); //TODO: res.params|| req.query ex.
});

router.delete('/delete', async (req, res) => {
    res.send(await UserService.add()); //TODO: res.params|| req.query ex.
});

module.exports = router;