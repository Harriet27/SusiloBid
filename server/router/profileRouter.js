const express = require('express');
const router = express.Router();
const { profileController } = require('../controller');
const { auth } = require('../helper/jwt');
const {
    getProfile,
    editProfile,
    oldPassProfile,
} = profileController;

router.get('/get-profile', getProfile);
router.patch('/edit-profile/:id', auth, editProfile);
router.get('/old-pass/:id', oldPassProfile);

module.exports = router;