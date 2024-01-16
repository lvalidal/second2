const express = require('express');
const MyController = require('../controller/my.controller');

const router=express.Router()


router.get('/',MyController.getAll)
router.post('/',MyController.post)
router.get('/:id',MyController.getOne)
router.delete('/:id',MyController.delete)
router.patch('/:id',MyController.edit)

module.exports=router