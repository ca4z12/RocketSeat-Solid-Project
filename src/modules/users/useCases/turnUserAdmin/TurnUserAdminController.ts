import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(req: Request, res: Response): Response {
    const { user_id } = req.params;

    try {
      const user = this.turnUserAdminUseCase.execute({ user_id })
    
      return res.json({user});
    }
    catch(err) {
      return res.status(404).json({ error: err.message} )
    }
    
  }
}

export { TurnUserAdminController };
