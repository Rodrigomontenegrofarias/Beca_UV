import {getConnection, sql} from '../database/connection'

// Peticiones Casinos
export const verCasinos = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM casinos');
 
    res.json(result.recordset);
 };
 
 export const verCasinoId = async (req, res) => {
    const {id} = req.params;
 
    const pool = await getConnection();
    const result = await pool.request()
    .input('id', id)
    .query('SELECT * FROM casinos WHERE id = @id')
 
    res.send(result.recordset[0]);
 };
 
 export const agregarCasino = async (req, res) =>{
    let { nombre, cantidad} = req.body;
 
    const pool = await getConnection();
    await pool.request()
    .input("nombre", sql.VarChar, nombre)
    .input("cantidad", sql.Int, cantidad)
    .query('INSERT INTO casinos (nombre, cantidad) VALUES (@nombre, 0)');
 };
 
 export const borrarCasino = async (req, res) => {
    const {id} = req.params;
 
    const pool = await getConnection();
    await pool.request()
    .input('id', id)
    .query('DELETE FROM casinos WHERE id = (CAST(@id AS VARCHAR))');
 };
 
 export const editarCasino = async (req, res) => {
    let { nombre, cantidad } = req.body;
    const {id} = req.params;
 
    const pool = await getConnection();
    await pool.request()
    .input("nombre", sql.VarChar, nombre)
    .input("cantidad", sql.Int, cantidad)
    .input("id", sql.Int, id)
    .query('UPDATE casinos SET nombre = @nombre, cantidad = @cantidad WHERE id = @id');
 }