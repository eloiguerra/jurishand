import { FindArticleUseCase } from "./find-article.usecase";
import { IFindArticleUseCase } from "./ports/find-article-usecase.struct";
import { IArticleRepository } from "./ports/repositories/article-repository.struct";
import { ArticleRepositoryInMemory } from "./ports/repositories/in-memory/article-repository.in-memory";

type SutType = {
  sut: IFindArticleUseCase;
  articleRepository: IArticleRepository;
};

const makeSut = (): SutType => {
  const articleRepository = new ArticleRepositoryInMemory();
  const sut = new FindArticleUseCase(articleRepository);

  return {
    sut,
    articleRepository,
  };
};

describe("FindArticleUseCase", () => {
  it("should find an article by keyword and category", async () => {
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

    const articles = await sut.execute({
      keyword: "Title",
      category: "Category",
    });

    expect(articles.getValue()).toContainEqual(expectedArticles[0]);
  });
});
