const express = require('express');
const responses = require('../common/responses');
const userController = require('../controllers/users.controller');
const checkAuth = require('../middleware/auth');
const router = express.Router();

router.get('/', checkAuth, async (req, res, next) => {
   try {
      const resp = await userController.getAll();
      responses.success(req, res, resp, 200);
   } catch (error) {
      next(error);
   }
});

router.post('/', checkAuth, async (req, res, next) => {
   try {
      await userController.saveUser(req.body)
      responses.success(req, res, "se guardo ok", 200);
   } catch (error) {
      next(error);
   }
});


module.exports = router;