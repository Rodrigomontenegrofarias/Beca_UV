import {Router} from 'express'
import {agregarAlumno, borrarAlumno, editarAlumno, verAlumnoId, verAlumnos} from '../controllers/alumnos.controller'
import {agregarCasino, borrarCasino, editarCasino, verCasinoId, verCasinos} from '../controllers/casinos.controller'
import {canjeAlumno, verCanjeRut} from '../controllers/canjes.controller'
import {loginUsuario, agregarUsuario, verUsuarios, borrarUsuario, verUsuarioId, editarUsuario} from '../controllers/login.controller'

const { checkToken, checkKey } = require('../middlewares/auth')

const router = Router()

//endpoint alumnos
router.get('/alumnos', checkToken, verAlumnos);
router.get('/alumnos/:id', checkToken, verAlumnoId);
router.post('/alumnos', checkToken, agregarAlumno);
router.delete('/alumnos/:id',checkToken, borrarAlumno);
router.put('/alumnos/:id', checkToken, editarAlumno);

//endpoint casinos
router.get('/casinos', verCasinos);
router.get('/casinos/:id', verCasinoId);
router.post('/casinos', agregarCasino);
router.delete('/casinos/:id', borrarCasino);
router.put('/casinos/:id', editarCasino);

//endpoint canjes en la raspberry
router.get('/canjes/:rut', verCanjeRut);
router.patch('/canjes/:rut', canjeAlumno);

//endpoint login
router.post('/login', loginUsuario);
//endpoint admin
router.get('/admin', checkToken, verUsuarios);
router.get('/alumnos/:id', checkToken, verUsuarioId);
router.post('/admin', checkKey, agregarUsuario);
router.delete('/admin/:id',checkToken, borrarUsuario);
router.put('/alumnos/:id', checkToken, editarUsuario);

export default router;