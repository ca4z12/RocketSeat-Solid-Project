import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(req: Request, res: Response): Response {
    const { user_id } = req.headers;

    try {
      const list = this.listAllUsersUseCase.execute({user_id: user_id as string});

      return res.status(200).json({ list })
    } 
    catch(err) {
      return res.status(400).json({ error: err.message })
    }
  }
}

export { ListAllUsersController };
