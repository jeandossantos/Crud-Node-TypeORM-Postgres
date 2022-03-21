import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../repositories/CategoryRepository";

type CategoryRequest = {
    name: string;
    description: string;
}

export class CreateCategoryService {
    async execute({ name, description }: CategoryRequest) {
        const repository = getCustomRepository(CategoryRepository);

        if (await repository.findOne({ name })) return new Error('Category already exists.');

        const category = repository.create({
            name,
            description
        });

        await repository.save(category);

        return category;
    }
}