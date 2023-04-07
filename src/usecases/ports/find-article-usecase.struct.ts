import { UseCase } from "src/shared/contracts/usecase";
import { ArticleModel } from "src/domain/models/article-model.struct";

export type FindArticleUseCaseParams = Partial<ArticleModel> & {
    keyword?: string;
  }

export type IFindArticleUseCase = UseCase<
    FindArticleUseCaseParams,
    ArticleModel[]
>