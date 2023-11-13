import jwt from "jsonwebtoken";

export const authRequired = (req, res, next) => {
    const token = req.cookies["access-token"];
    if (!token) return res.status(401).json({ message: "Access denied" });

    jwt.verify(token, "secret", (error, decoded) => {
        if (error) return res.status(401).json({ message: "Invalid token" });
        req.userId = decoded.id;
    });

    next();
};