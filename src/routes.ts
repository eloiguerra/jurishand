import { Router } from "express";
import { Express } from "express";
import { makeCreateArticle } from "./factories/create-article.factory";
import { adaptRoute } from "./infra/adapters/express-adapter";
import { makeFindArticle } from "./factories/find-article.factory";
import { makeDeleteArticle } from "./factories/delete-article.factory";

export default (app: Express): void => {
  const routes = Router();

  routes.post("/article", adaptRoute(makeCreateArticle()));
  routes.get("/article", adaptRoute(makeFindArticle()));
  routes.delete("/article/:id", adaptRoute(makeDeleteArticle()));

  app.use(routes);
};
