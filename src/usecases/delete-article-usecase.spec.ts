import { DeleteArticleUseCase } from "./delete-article.usecase";
import { IDeleteArticleUseCase } from "./ports/delete-article-usecase.struct";
import { IArticleRepository } from "./ports/repositories/article-repository.struct";
import { ArticleRepositoryInMemory } from "./ports/repositories/in-memory/article-repository.in-memory";

type SutType = {
  sut: IDeleteArticleUseCase;
  articleRepository: IArticleRepository;
};

const makeSut = (): SutType => {
  const articleRepository = new ArticleRepositoryInMemory();
  const sut = new DeleteArticleUseCase(articleRepository);

  return {
    sut,
    articleRepository,
  };
};

describe("DeleteArticleUseCase", () => {
  it("should delete an article", async () => {
    const { sut, articleRepository } = makeSut();

    const expectedArticle = {
      title: "Title",
      content: "Content",
      author: "Author",
      category: "Category",
      date: new Date(),
    };

    const createdArticle = await articleRepository.create(expectedArticle);

    const response = await sut.execute({ id: createdArticle.id });

    expect(response.isSuccess).toBe(true);
  });
});
