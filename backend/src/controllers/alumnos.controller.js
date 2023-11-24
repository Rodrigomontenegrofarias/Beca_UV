import {getConnection, sql} from '../database/connection'

// Peticiones Alumnos
export const verAlumnos = async (req, res) => {
   const pool = await getConnection();
   const result = await pool.request().query('SELECT * FROM alumnos');

   res.json(result.recordset);
};

export const verAlumnoId = async (req, res) => {
   const {id} = req.params;

   const pool = await getConnection();
   const result = await pool.request()
   .input('id', id)
   .query('SELECT * FROM alumnos WHERE id = @id')

   res.send(result.recordset[0]);
};

export const agregarAlumno = async (req, res) =>{
   let { nombre, rut, cantidad} = req.body;
   const canje = 0;
   const fechaActual = new Date();

   const dia = fechaActual.getDate() - 1; // Para que se pueda efectuar un canje de la beca desde hoy mismo
   const mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0, así que se suma 1
   const anio = fechaActual.getFullYear();

   const fecha = dia+'-'+mes+'-'+anio;

   const pool = await getConnection();
   await pool.request()
   .input("nombre", sql.VarChar, nombre)
   .input("rut", sql.VarChar, rut)
   .input("cantidad", sql.Int, cantidad)
   .input("canje", sql.Int, canje)
   .input("fecha", sql.VarChar, fecha)
   .query('INSERT INTO alumnos (nombre, rut, cantidad, canje, fecha) VALUES (@nombre, @rut, @cantidad, @canje, @fecha)');
};

export const borrarAlumno = async (req, res) => {
   const {id} = req.params;

   const pool = await getConnection();
   await pool.request()
   .input('id', id)
   .query('DELETE FROM alumnos WHERE id = (CAST(@id AS VARCHAR))');
};

export const editarAlumno = async (req, res) => {
   let { nombre, rut, cantidad } = req.body;
   const {id} = req.params;

   const pool = await getConnection();
   await pool.request()
   .input("nombre", sql.VarChar, nombre)
   .input("rut", sql.VarChar, rut)
   .input("cantidad", sql.Int, cantidad)
   .input("id", sql.Int, id)
   .query('UPDATE alumnos SET nombre = @nombre, rut = @rut, cantidad = @cantidad WHERE id = @id');
}