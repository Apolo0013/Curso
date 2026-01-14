import { Request, Response, NextFunction } from "express";
import { validateEmail } from "../utils/validateEmail";

export function validateEmailMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      message: "E-mail é obrigatório",
    });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({
      message: "Formato de e-mail inválido",
    });
  }

  next();
}
