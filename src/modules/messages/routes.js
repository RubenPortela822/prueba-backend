const express = require('express');
const responses = require('../../common/responses');
const messagesController = require('./controller');

const router = express.Router();

router.get('/', async (req, res, next) => {
   try {
      const resp = await messagesController.getAll();      
      responses.success(req, res, resp, 200);
   } catch (error) {
      next(error);
   }
});



module.exports = router;