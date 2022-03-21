import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../repositories/CategoryRepository";

export class GetCategoryService {
    async execute(id: string) {
        const repository = getCustomRepository(CategoryRepository);

        const category = await repository.findOne(id);

        return category;
    }
}