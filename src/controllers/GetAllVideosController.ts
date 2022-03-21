import { Request, Response } from "express";
import { GetAllvideosService } from "../services/GetAllVideosService";

export class GetAllVideosController {
    async handle(req: Request, res: Response) {

        const service = new GetAllvideosService();

        const result = await service.execute();

        return res.json(result);
    }
}