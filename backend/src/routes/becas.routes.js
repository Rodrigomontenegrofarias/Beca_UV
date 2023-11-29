import {Router} from 'express'
import {agregarAlumno, borrarAlumno, editarAlumno, verAlumnoId, verAlumnos} from '../controllers/alumnos.controller'
import {agregarCasino, borrarCasino, editarCasino, verCasinoId, verCasinos} from '../controllers/casinos.controller'
import {canjeAlumno, verCanjeRut} from '../controllers/canjes.controller'
import {loginUsuario, agregarUsuario, verUsuarios, borrarUsuario, verUsuarioId} from '../controllers/login.controller'
import { checkToken} from '../middlewares/auth'

const router = Router()

//endpoint alumnos
router.get('/alumnos', checkToken, verAlumnos);
router.get('/alumnos/:id', checkToken, verAlumnoId);
router.post('/alumnos', checkToken, agregarAlumno);
router.delete('/alumnos/:id', checkToken, borrarAlumno);
router.put('/alumnos/:id', checkToken, editarAlumno);

//endpoint casinos
router.get('/casinos', checkToken, verCasinos);
router.get('/casinos/:id', checkToken, verCasinoId);
router.post('/casinos', checkToken, agregarCasino);
router.delete('/casinos/:id', checkToken, borrarCasino);
router.put('/casinos/:id', checkToken, editarCasino);

//endpoint canjes en la raspberry
router.get('/canjes/:rut/:idCasino', verCanjeRut);
router.patch('/canjes/:rut/:idCasino', canjeAlumno);

//endpoint login
router.post('/login', loginUsuario);
//endpoint admin
router.get('/admin', verUsuarios);
router.get('/admin/:id', verUsuarioId);
router.post('/admin', agregarUsuario);
router.delete('/admin/:id', borrarUsuario);

export default router;