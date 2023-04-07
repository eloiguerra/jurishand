import { DeleteArticleController } from "../controllers/delete-article.controller";
import { ArticleRepository } from "../repositories/article.repository";
import { Controller } from "../shared/contracts/controller";
import { DeleteArticleUseCase } from "../usecases/delete-article.usecase";

export const makeDeleteArticle = (): Controller => {
  const articleRepository = new ArticleRepository();

  const deleteArticleUseCase = new DeleteArticleUseCase(articleRepository);
  const deleteArticleController = new DeleteArticleController(
    deleteArticleUseCase
  );

  return deleteArticleController;
};
