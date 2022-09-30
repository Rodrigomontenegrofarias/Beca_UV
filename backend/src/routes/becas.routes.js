import {Router} from 'express'
import {
        agregarAlumno, borrarAlumno, editarAlumno, verAlumnoId, verAlumnos, 
        agregarCasino, borrarCasino, editarCasino, verCasinoId, verCasinos
        } 
    from '../controllers/alumnos.controller'

const router = Router()

//endpoint alumnos
router.get('/alumnos', verAlumnos);
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

//endpoint canjes
router.get('/canjes', verCasinos);
router.get('/canjes/:id', verCanjeId);
router.put('/canjes/:id', Canje);
/* router.post('/canjes', agregarCanje); 
router.delete('/canjes/:id', borrarCanje); */

export default router