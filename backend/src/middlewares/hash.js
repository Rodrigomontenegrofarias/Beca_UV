// filepath: /Users/rodrigomontenegro/Desktop/moreti2/BecaUV/backend/src/middlewares/hash.js
import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

export const verifyPassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};