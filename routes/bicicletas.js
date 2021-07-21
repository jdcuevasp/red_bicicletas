var express = require('express');
var router = express.Router();
var bicicletaController = require('../controllers/bicicleta');

/*Get lista de datos*/
router.get('/', bicicletaController.bicicleta_list);

/* Otro get para   */
router.get('/create', bicicletaController.bicicleta_create_get);
router.post('/create', bicicletaController.bicicleta_create_post);
/* Otro get para   */
router.get('/:id/update', bicicletaController.bicicleta_update_get);
router.post('/:id/update', bicicletaController.bicicleta_update_post);

/*Para elemininar,:Id es para ruta */
router.post('/:id/delete', bicicletaController.bicicleta_delete_post);


module.exports = router;