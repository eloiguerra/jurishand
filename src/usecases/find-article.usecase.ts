import { ArticleModel } from "../domain/models/article-model.struct";
import {
  FindArticleUseCaseParams,
  IFindArticleUseCase,
} from "./ports/find-article-usecase.struct";
import { IArticleRepository } from "./ports/repositories/article-repository.struct";
import { Result } from "../shared/contracts";

export class FindArticleUseCase implements IFindArticleUseCase {
  constructor(private readonly articleRepository: IArticleRepository) {}

  async execute(
    params: FindArticleUseCaseParams
  ): Promise<Result<ArticleModel[]>> {
    const articles = await this.articleRepository.find(params);

    return Result.ok(articles);
  }
}
