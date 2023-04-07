import { CreateArticleController } from "../controllers/create-article.controller";
import { ArticleRepository } from "../repositories/article.repository";
import { Controller } from "../shared/contracts/controller";
import { CreateArticleUseCase } from "../usecases/create-article.usecase";

export const makeCreateArticle = (): Controller => {
  const articleRepository = new ArticleRepository();

  const createArticleUseCase = new CreateArticleUseCase(articleRepository);
  const createArticleController = new CreateArticleController(
    createArticleUseCase
  );

  return createArticleController;
};
