import crypto from "crypto";
import jwt from "jsonwebtoken";

const jwtSecret = (process.env.JWT_SECRET as string) || "123456789";

export const hashPassword = (psw: string) => {
  return crypto
    .createHash("sha256")
    .update(psw + jwtSecret)
    .digest("hex");
};

export const generateToken = (userId: string) => {
  console.log("jwt:", userId);
  return jwt.sign(userId, jwtSecret, { expiresIn: "7d" });
};

export const authJWT = (token: string) =>
  new Promise<string>((resolve, reject) => {
    jwt.verify(token, jwtSecret, function (err, decoded: any) {
      if (err || !decoded?.userId) {
        reject("unAuthorization");
      }
      resolve(decoded.userId);
    });
  });
