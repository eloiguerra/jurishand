import { Controller, HttpRequest, HttpResponse } from "../shared/contracts";
import { badRequest, noContent, ok, serverError } from "../shared/helpers/http";
import { IDeleteArticleUseCase } from "src/usecases/ports/delete-article-usecase.struct";

export class DeleteArticleController implements Controller {
  constructor(private readonly DeleteArticleUseCase: IDeleteArticleUseCase) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = request.params;

      const deleteArticleUseCaseResponse =
        await this.DeleteArticleUseCase.execute({
          id,
        });

      if (deleteArticleUseCaseResponse.isSuccess) {
        return noContent();
      }

      return badRequest(deleteArticleUseCaseResponse.error);
    } catch (error) {
      return serverError(error);
    }
  }
}
