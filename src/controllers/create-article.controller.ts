import { Controller } from "../shared/contracts/controller";
import { HttpRequest, HttpResponse } from "../shared/contracts/http";
import { ICreateArticleUseCase } from "../usecases/ports/create-article-usecase.struct";
import { badRequest, ok, serverError } from "../shared/helpers/http";

export class CreateArticleController implements Controller {
  constructor(private readonly createArticleUseCase: ICreateArticleUseCase) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const { author, title, content, category } = request.body;

      const createArticleUseCaseResponse =
        await this.createArticleUseCase.execute({
          author,
          title,
          content,
          category,
          date: new Date(),
        });

      if (createArticleUseCaseResponse.isSuccess) {
        return ok(createArticleUseCaseResponse.getValue());
      }

      return badRequest(createArticleUseCaseResponse.error);
    } catch (error) {
      console.log(error);
      return serverError(error);
    }
  }
}
