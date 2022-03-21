import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../repositories/CategoryRepository";

export class GetAllCategoriesService {
    async execute() {
        const repository = getCustomRepository(CategoryRepository);

        const categories = await repository.find();

        return categories;
    }
}