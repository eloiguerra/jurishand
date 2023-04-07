import { AppDataSource } from "../infra/database/data-source";
import { ArticleModel } from "../domain/models/article-model.struct";
import { Articles } from "../entities/article.entity";
import {
  FindParams,
  IArticleRepository,
} from "../usecases/ports/repositories/article-repository.struct";
import { ILike } from "typeorm";

export class ArticleRepository implements IArticleRepository {
  constructor(
    private readonly repository = AppDataSource.getRepository(Articles)
  ) {}

  async create({
    author,
    title,
    content,
    category,
    date,
  }: Omit<ArticleModel, "id">): Promise<ArticleModel> {
    const newArticle = this.repository.create({
      author,
      title,
      content,
      category,
      date,
    });

    return this.repository.save(newArticle);
  }

  async find({ keyword, category }: FindParams): Promise<ArticleModel[]> {
    const where = [];

    if (keyword) {
      where.push({ title: ILike(`%${keyword}%`) });
      where.push({ content: ILike(`%${keyword}%`) });
    }
    if (category) where.push({ category: ILike(`%${category}%`) });

    const articles = this.repository.find({
      where,
      order: {
        date: "DESC",
      },
    });

    return articles;
  }

  async delete(id: number): Promise<void> {
    this.repository.delete({
      id,
    });
  }
}
