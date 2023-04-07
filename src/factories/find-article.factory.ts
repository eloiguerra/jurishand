import { ArticleRepository } from "../repositories/article.repository";
import { Controller } from "../shared/contracts/controller";
import { FindArticleUseCase } from "../usecases/find-article.usecase";
import { FindArticleController } from "../controllers/find-article.controller";

export const makeFindArticle = (): Controller => {
  const articleRepository = new ArticleRepository();

  const findArticleUseCase = new FindArticleUseCase(articleRepository);
  const findArticleController = new FindArticleController(findArticleUseCase);

  return findArticleController;
};
