import jwt from "jsonwebtoken";

export const createAccessToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload, 
            "secret", 
            {
                expiresIn: 86400,
            }, 
            (err, token) => {
                if (err) reject(err);
                resolve(token);
            }
        );
    });
}