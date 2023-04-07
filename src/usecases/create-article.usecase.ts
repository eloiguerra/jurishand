import { ArticleModel } from "../domain/models/article-model.struct";
import { Result } from "../shared/contracts/result";
import { ICreateArticleUseCase, ICreateArticleUseCaseParams } from "./ports/create-article-usecase.struct";
import { FailedToCreateArticleException } from "./ports/errors/failed-to-create-article.exception";
import { IArticleRepository } from "./ports/repositories/article-repository.struct";

export class CreateArticleUseCase implements ICreateArticleUseCase {
  constructor(
    private readonly articleRepository: IArticleRepository
  ) {}

  async execute({ author, category, content, date, title}: ICreateArticleUseCaseParams): Promise<Result<ArticleModel>> {
    const article = await this.articleRepository.create({
      author,
      category,
      content,
      date,
      title
    })

    if (!article) {
      return Result.fail(new FailedToCreateArticleException())
    }

    return Result.ok(article)
  }
}