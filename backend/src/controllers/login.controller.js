import {getConnection, sql} from '../database/connection'
import { createToken } from '../middlewares/auth';
import {hashPassword, verifyPassword} from '../middlewares/hash'

//peticiones login
export const loginUsuario = async (req, res) => {
    let isMatch = false;
    let { usuario, password} = req.body;
 
    const pool = await getConnection();
    const user = await pool.request()
    .input("usuario", sql.VarChar, usuario)
    .query('SELECT * FROM users WHERE (usuario = @usuario)');
    
    if (user.recordset.length > 0) {
       isMatch = await verifyPassword(password, user.recordset[0].password);
    }
    res.json({
      success: isMatch,
      token: createToken(user)
    });
 };
 
 export const agregarUsuario = async (req, res) =>{
    let { usuario, password, role} = req.body;
    password = await hashPassword(password);
 
    const pool = await getConnection();
    await pool.request()
    .input("usuario", sql.VarChar, usuario)
    .input("password", sql.VarChar, password)
    .input("role", sql.VarChar, role)
    .query('INSERT INTO users (usuario, password, role) VALUES (@usuario, @password, @role)');
 };