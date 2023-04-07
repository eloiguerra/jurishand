import { Controller } from "src/shared/contracts";
import { FindArticleUseCase } from "../usecases/find-article.usecase";
import { IFindArticleUseCase } from "../usecases/ports/find-article-usecase.struct";
import { ArticleRepositoryInMemory } from "../usecases/ports/repositories/in-memory/article-repository.in-memory";
import { IArticleRepository } from "../usecases/ports/repositories/article-repository.struct";
import { FindArticleController } from "./find-article.controller";
type SutType = {
  sut: Controller;
  findArticleUseCase: IFindArticleUseCase;
  articleRepository: IArticleRepository;
};

const makeSut = (): SutType => {
  const articleRepository = new ArticleRepositoryInMemory();
  const findArticleUseCase = new FindArticleUseCase(articleRepository);

  const sut = new FindArticleController(findArticleUseCase);

  return {
    sut,
    findArticleUseCase,
    articleRepository,
  };
};

describe("FindArticleController", () => {
  it("should find an article", async () => {
    const { sut, articleRepository } = makeSut();

    const creationArticles = [
      {
        title: "Title",
        content: "Content",
        author: "Author",
        category: "Category",
        date: new Date(),
      },
    ];

    await articleRepository.create(creationArticles[0]);

    const expectedArticles = creationArticles.map((article, index) => ({
      ...article,
      id: index + 1,
    }));

    const articles = await sut.handle({
      query: {
        keyword: "Title",
      },
    });

    expect(articles.body).toContainEqual(expectedArticles[0]);
  });
});
