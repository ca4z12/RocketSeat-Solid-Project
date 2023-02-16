import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(req: Request, res: Response): Response {
    const { name, email } = req.body;

    try {
      const user = this.createUserUseCase.execute({ name, email })

      return res.status(201).json({user});
    }
    catch(err) {
      return res.status(400).json({ error: err.message })
    }
  }
}

export { CreateUserController };
