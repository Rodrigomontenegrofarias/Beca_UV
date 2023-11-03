import {Router} from 'express'
import {agregarAlumno, borrarAlumno, editarAlumno, verAlumnoId, verAlumnos} from '../controllers/alumnos.controller'
import {agregarCasino, borrarCasino, editarCasino, verCasinoId, verCasinos} from '../controllers/casinos.controller'
import {canjeAlumno, verCanjeRut} from '../controllers/canjes.controller'
import {loginUsuario, agregarUsuario} from '../controllers/login.controller'

const { checkApiKey, checkToken } = require('../middlewares/auth')

const router = Router()

//endpoint alumnos
router.get('/alumnos', checkToken, verAlumnos);
router.get('/alumnos/:id', verAlumnoId);
router.post('/alumnos', agregarAlumno);
router.delete('/alumnos/:id', borrarAlumno);
router.put('/alumnos/:id', editarAlumno);

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
router.post('/register', agregarUsuario);

export default router