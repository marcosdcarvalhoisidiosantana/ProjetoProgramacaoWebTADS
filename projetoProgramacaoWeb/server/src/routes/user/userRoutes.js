const express = require('express');
const userController = require('../../controllers/user/userController');

const router = express.Router();

router.post('/usuario', userController.adicionarUsuario);
router.get('/usuario',userController.listarUsuario);
router.get('/usuario/:id?', userController.listarUsuarioFiltro);
router.put('/usuario/:id', userController.atualizarInformacoesUsuario);
router.delete('/usuario/:id?', userController.removerUsuario);

module.exports = router;