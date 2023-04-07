export class FailedToCreateArticleException extends Error {
  constructor() {
    super('Falha ao criar artigo, por favor verifique os dados!')
    this.name = 'FailedToCreateArticle'
  }
}