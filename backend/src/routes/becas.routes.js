import {Router} from 'express'
import {
        agregarAlumno, borrarAlumno, editarAlumno, verAlumnoId, verAlumnos, 
        agregarCasino, borrarCasino, editarCasino, verCasinoId, verCasinos, verAlumnoRut, canjeAlumno
        } 
    from '../controllers/alumnos.controller'

const router = Router()

//endpoint alumnos
router.get('/alumnos', verAlumnos);
router.get('/alumnos/:id', verAlumnoId);
router.get('/alumnos/:rut', verAlumnoRut);
router.post('/alumnos', agregarAlumno);
router.delete('/alumnos/:id', borrarAlumno);
router.put('/alumnos/:id', editarAlumno);
router.put('/alumnos/:rut', canjeAlumno);

//endpoint casinos
router.get('/casinos', verCasinos);
router.get('/casinos/:id', verCasinoId);
router.post('/casinos', agregarCasino);
router.delete('/casinos/:id', borrarCasino);
router.put('/casinos/:id', editarCasino);

export default router