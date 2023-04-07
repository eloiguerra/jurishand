import { Result } from "../shared/contracts";
import { ArticleModel } from "../domain/models/article-model.struct";
import {
  DeleteArticleUseCaseParams,
  IDeleteArticleUseCase,
} from "./ports/delete-article-usecase.struct";
import { IArticleRepository } from "./ports/repositories/article-repository.struct";

export class DeleteArticleUseCase implements IDeleteArticleUseCase {
  constructor(private readonly articleRepository: IArticleRepository) {}
  async execute({ id }: DeleteArticleUseCaseParams): Promise<Result<void>> {
    await this.articleRepository.delete(id);

    return Result.ok();
  }
}
