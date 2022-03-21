import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../repositories/CategoryRepository";

type CategoryUpdateRequest = {
    id: string;
    name: string;
    description: string;
}

export class UpdateCategoryService {
    async execute({ id, name, description }: CategoryUpdateRequest) {
        const repository = getCustomRepository(CategoryRepository);

        const category = await repository.findOne(id);

        if (!category) return new Error("Category does not exits.");

        category.name = name ? name : category.name;
        category.description = description ? description : category.description;

        await repository.save(category);
    }
}