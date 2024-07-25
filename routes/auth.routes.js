const express = require('express');
const responses = require('../common/responses');
const loginController = require('../controllers/auth.controller');

const router = express.Router();

router.post('/', async (req, res, next) => {
   try {
      const resp = await loginController.auth(req.body);      
      if (resp == 404) {
         responses.success(req, res, "usuario no encontrado", 404);
      }
      if (resp == 409) {
         responses.success(req, res, "credenciales invalidas", 404);
      }
      responses.success(req, res, resp, 200);
   } catch (error) {
      next(error);
   }
});



module.exports = router;