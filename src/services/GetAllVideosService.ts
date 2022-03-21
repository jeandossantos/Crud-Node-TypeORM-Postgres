import { getCustomRepository } from "typeorm";
import { VideoRepository } from "../repositories/VideoRepository";

export class GetAllvideosService {
    async execute() {
        const repository = getCustomRepository(VideoRepository);

        const videos = await repository.find({
            relations: ['category']
        });

        return videos;
    }
}