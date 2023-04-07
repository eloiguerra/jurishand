import { CreateArticleUseCase } from "./create-article.usecase";
import { ICreateArticleUseCase } from "./ports/create-article-usecase.struct";
import { IArticleRepository } from "./ports/repositories/article-repository.struct";
import { ArticleRepositoryInMemory } from "./ports/repositories/in-memory/article-repository.in-memory";

type SutType = {
  sut: ICreateArticleUseCase;
  articleRepository: IArticleRepository;
};

const makeSut = (): SutType => {
  const articleRepository = new ArticleRepositoryInMemory();
  const sut = new CreateArticleUseCase(articleRepository);

  return {
    sut,
    articleRepository,
  };
};

describe("CreateArticleUseCase", () => {
  it("should create an article", async () => {
    const { sut } = makeSut();

    const expectedArticle = {
      title: "Title",
      content: "Content",
      author: "Author",
      category: "Category",
      date: new Date(),
    };
    const article = await sut.execute(expectedArticle);

    expect(article.getValue()).toEqual({
      id: expect.any(Number),
      ...expectedArticle,
    });
  });
});
