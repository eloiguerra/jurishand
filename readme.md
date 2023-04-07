# Como rodar a API

1. Suba o banco de dados usando o docker executando o comando `docker-compose up -d`
2. Crie um arquivo **.env** e siga o arquivo **.env.template** como base. Caso esteja utilizando o banco do docker, não precisa nem trocar os valores das variaveis
3. Execute o comando `yarn migration:run` para gerar as tabelas no banco
4. Inicie a API usando o comando `yarn dev`

# Como rodar o script em python

1. Certifique-se de ter concluidos os passos de "Como rodar a API"
2. Execute o comando `python3 caminho_do_arquivo/article.py` (é necessário apenas a instalação da biblioteca pandas)
3. Para mudar os parametros da requisição é necessário trocar manualmente os valores das variáveis "category" e "keyword" dentro do método "getParams"

# Como rodar os testes da API

1. Execute `npm | yarn jest`

# Documentação de boas práticas

## Nomeclatura de arquivos

Padrão kebab case. Ex: `nome-do-arquivo.ts`.

Os seguintes tipos de arquivos devem possuir o padrão citado abaixo:

| Tipo de arquivo  | Nomeclatura |
| ---------------- | ----------- |
| Interface, types | .struct     |
| Repositórios     | .repository |
| Use Case         | .usecase    |
| Controller       | .controller |

## Nomeclatura de classes

Padrão pascal case. Ex: `SignInSocial.ts`.

Ao final de cada classe deve conter sua responsabilidade. Ex: `SignInSocialUseCase`.
