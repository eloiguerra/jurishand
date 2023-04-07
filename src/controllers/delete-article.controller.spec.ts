import { ArticleRepositoryInMemory } from "../usecases/ports/repositories/in-memory/article-repository.in-memory";
import { Controller } from "../shared/contracts";
import { DeleteArticleUseCase } from "../usecases/delete-article.usecase";
import { IDeleteArticleUseCase } from "../usecases/ports/delete-article-usecase.struct";
import { DeleteArticleController } from "./delete-article.controller";

type SutType = {
  sut: Controller;
  deleteArticleUseCase: IDeleteArticleUseCase;
  articleRepository: ArticleRepositoryInMemory;
};

const makeSut = (): SutType => {
  const articleRepository = new ArticleRepositoryInMemory();

  const deleteArticleUseCase = new DeleteArticleUseCase(articleRepository);
  const sut = new DeleteArticleController(deleteArticleUseCase);

  return {
    sut,
    deleteArticleUseCase,
    articleRepository,
  };
};

describe("DeleteArticleController", () => {
  it("should delete an article", async () => {
    const { sut, articleRepository } = makeSut();

    const insertArticle = {
      title: "Title",
      content: "Content",
      author: "Author",
      category: "Category",
      date: new Date(),
    };

    const newArticle = await articleRepository.create(insertArticle);

    const response = await sut.handle({
      params: {
        id: newArticle.id,
      },
    });

    expect(response.statusCode).toBe(204);
  });
});
