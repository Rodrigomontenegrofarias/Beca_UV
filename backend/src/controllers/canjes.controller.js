import {getConnection, sql} from '../database/connection'

// Peticiones Canje de beca
export const verCanjeRut = async (req, res) => {
    const {rut} = req.params;
 
    const pool = await getConnection();
    const result = await pool.request()
    .input('rut', rut)
    .query('SELECT * FROM alumnos WHERE rut = @rut')
    const respuesta = result.recordset.length;
 
    if (respuesta === 1) {
       res.send(result.recordset[0]);
    }
    else {
       res.sendStatus(404)
    }
 };
 
 export const canjeAlumno = async (req, res) => {
    const {rut} = req.params;
 
    const pool = await getConnection();
    await pool.request()
    .input("rut", rut)
    .query('UPDATE alumnos SET cantidad = (cantidad - 1) WHERE rut = @rut')
    res.sendStatus(201)
    canje();
 }
 
 const canje = async () => {
 
    const pool = await getConnection();
    await pool.request()
    .query('UPDATE casinos SET cantidad = (cantidad + 1) WHERE id = 1')
 }