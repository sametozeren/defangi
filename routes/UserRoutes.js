const expres = require('express');
const router = expres.Router();
const UserService = require('../services/UserService');

router.get('/getAll', async (req, res) => {
    res.send(await UserService.getAll());
});

router.get('/get', async (req, res) => {
    res.send(await UserService.getById(req.body));
});

router.post('/new', async (req, res) => {
    res.send(await UserService.add(req.body));
});

router.put('/update', async (req, res) => {
    res.send(await UserService.update(req.body));
});

router.delete('/delete', async (req, res) => {
    res.send(await UserService.add(req.body));
});

module.exports = router;