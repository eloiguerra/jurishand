import { Controller, HttpRequest, HttpResponse } from "../shared/contracts";
import { badRequest, ok, serverError } from "../shared/helpers/http";
import { IFindArticleUseCase } from "../usecases/ports/find-article-usecase.struct";

export class FindArticleController implements Controller {
  constructor(private readonly findArticleUseCase: IFindArticleUseCase) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const { category = "", keyword = "" } = request.query;

      const findArticlesUseCaseResponse = await this.findArticleUseCase.execute(
        {
          category,
          keyword,
        }
      );

      if (findArticlesUseCaseResponse.isSuccess) {
        return ok(findArticlesUseCaseResponse.getValue());
      }

      return badRequest(findArticlesUseCaseResponse.error);
    } catch (error) {
      console.log(error);
      return serverError(error);
    }
  }
}
