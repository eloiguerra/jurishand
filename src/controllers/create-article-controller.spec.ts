import { Controller } from "src/shared/contracts";
import { CreateArticleController } from "./create-article.controller";
import { ICreateArticleUseCase } from "../usecases/ports/create-article-usecase.struct";
import { CreateArticleUseCase } from "../usecases/create-article.usecase";
import { ArticleRepositoryInMemory } from "../usecases/ports/repositories/in-memory/article-repository.in-memory";

type SutType = {
  sut: Controller;
  createArticleUseCase: ICreateArticleUseCase;
};

const makeSut = (): SutType => {
  const articleRepository = new ArticleRepositoryInMemory();
  const createArticleUseCase = new CreateArticleUseCase(articleRepository);

  const sut = new CreateArticleController(createArticleUseCase);

  return {
    sut,
    createArticleUseCase,
  };
};

describe("CreateArticleController", () => {
  it("should create an article", async () => {
    const { sut } = makeSut();

    const expectedArticle = {
      title: "Title",
      content: "Content",
      author: "Author",
      category: "Category",
    };
    const article = await sut.handle({
      body: expectedArticle,
    });

    expect(article.body).toEqual({
      id: expect.any(Number),
      date: expect.any(Date),
      ...expectedArticle,
    });
  });
});
