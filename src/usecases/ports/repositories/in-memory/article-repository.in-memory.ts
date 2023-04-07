import { ArticleModel } from "src/domain/models/article-model.struct";
import { FindParams, IArticleRepository } from "../article-repository.struct";
import { CreationModel } from "src/shared/contracts/creation-model";

export class ArticleRepositoryInMemory implements IArticleRepository {
  private articles: ArticleModel[] = [];

  create(article: CreationModel<ArticleModel>): Promise<ArticleModel> {
    const newArticle = { id: this.articles.length + 1, ...article };
    this.articles.push(newArticle);

    return new Promise((resolve) => {
      resolve(newArticle);
    });
  }

  find(params: FindParams): Promise<ArticleModel[]> {
    const articles = this.articles.filter((article) => {
      return Object.keys(params).some((key) => {
        if (key === "keyword") {
          return (
            article.title.includes(params[key]) ||
            article.content.includes(params[key])
          );
        }
        return article[key] === params[key];
      });
    });

    return new Promise((resolve) => {
      resolve(articles);
    });
  }

  delete(id: number): Promise<void> {
    const index = this.articles.findIndex((article) => article.id === id);
    this.articles.splice(index, 1);

    return new Promise((resolve) => {
      resolve();
    });
  }
}
