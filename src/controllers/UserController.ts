import { Request, Response } from "express";

export class UserController {
  async create(req: Request, res: Response) {
    const { email, password } = req.body;

    // aqui o e-mail JÁ ESTÁ VALIDADO
    // agora é só salvar no banco

    return res.status(201).json({
      message: "Usuário criado com sucesso",
      email,
    });
  }
}
