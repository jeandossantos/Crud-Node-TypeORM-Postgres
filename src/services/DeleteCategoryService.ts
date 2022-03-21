import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../repositories/CategoryRepository";

export class DeleteCategoryService {
    async execute(id: string) {
        const repository = getCustomRepository(CategoryRepository);

        if (!await repository.findOne({ id })) return new Error("Category does not exits.");

        await repository.delete(id);
    }
}