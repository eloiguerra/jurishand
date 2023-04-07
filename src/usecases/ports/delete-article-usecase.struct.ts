import { UseCase } from "src/shared/contracts/usecase";

export type DeleteArticleUseCaseParams = {
  id: Number;
};

export type IDeleteArticleUseCase = UseCase<DeleteArticleUseCaseParams, void>;
