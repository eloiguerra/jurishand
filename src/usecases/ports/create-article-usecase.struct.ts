import { ArticleModel } from "../../domain/models/article-model.struct"
import { CreationModel } from "../../shared/contracts/creation-model"
import { UseCase } from "../../shared/contracts/usecase"

export type ICreateArticleUseCaseParams = CreationModel<ArticleModel>

export type ICreateArticleUseCase = UseCase<
  ICreateArticleUseCaseParams,
  ArticleModel
>