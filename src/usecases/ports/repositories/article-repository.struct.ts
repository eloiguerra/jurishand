import { ArticleModel } from "../../../domain/models/article-model.struct";
import { CreationModel } from "../../../shared/contracts/creation-model";

export type FindParams = Partial<Pick<ArticleModel, "category">> & {
  keyword?: string;
};

export interface IArticleRepository {
  create(data: CreationModel<ArticleModel>): Promise<ArticleModel>;
  find(data: FindParams): Promise<ArticleModel[]>;
  delete(id: Number): Promise<void>;
}
