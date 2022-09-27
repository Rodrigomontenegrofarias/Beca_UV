import {Router} from 'express'
import {
        agregarAlumno, borrarAlumno, editarAlumno, verAlumnoId, verAlumnos, 
        agregarCasino, borrarCasino, editarCasino, verCasinoId, verCasinos
        } 
    from '../controllers/alumnos.controller'

const router = Router()

router.get('/alumnos', verAlumnos);

router.get('/alumnos/:id', verAlumnoId);

router.post('/alumnos', agregarAlumno);

router.delete('/alumnos/:id', borrarAlumno);

router.put('/alumnos/:id', editarAlumno);

router.get('/casinos', verCasinos);

router.get('/casinos/:id', verCasinoId);

router.post('/casinos', agregarCasino);

router.delete('/casinos/:id', borrarCasino);

router.put('/casinos/:id', editarCasino);

export default router