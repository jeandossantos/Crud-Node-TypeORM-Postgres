import { getCustomRepository } from "typeorm";
import { VideoRepository } from "../repositories/VideoRepository";
import { GetCategoryService } from "./GetCategoryService";

type VideoRequest = {
    name: string;
    description: string;
    duration: number;
    category_id: string;
}

export class CreateVideoService {
    async execute({ name, description, duration, category_id }: VideoRequest) {
        const repository = getCustomRepository(VideoRepository);

        if (!await new GetCategoryService().execute(category_id)) {
            return new Error('Category does not exists.');
        }

        const video = repository.create({
            name,
            description,
            duration,
            category_id
        });

        console.log(video)
        await repository.save(video);

        return video;
    }
}