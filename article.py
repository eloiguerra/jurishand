import requests
import pandas as pd

URL = 'http://localhost:3000/article'
OUTPUT_FILE = 'articles.csv'

class Article:
    @staticmethod
    def getParams():
        category = "JUDICIAL"
        keyword = "MEDIO"
        return ({'category': category, 'keyword': keyword})

    @staticmethod
    def requestAPI(params):
        try:
            response = requests.get(URL, params)
            return response;
        except requests.ConnectionError as error:
            print(error)
            print("500 - Erro Interno")
            exit();
    
    @staticmethod
    def createDataFrame(response):
        try:
            df = pd.DataFrame(response.json())
            df = df.rename(columns={'category': 'Categoria', 'author': 'Autor'})
            if df.empty:
                print("404 - No data found!")
                exit();
            return df;
        except ValueError as error:
            print("404 - No data found!")
            exit();

    @staticmethod
    def createCategoryDF(df):
        dfCategory = df[['Categoria']].copy()
        dfCategory['Quantidade de Artigos por Categoria'] = df.groupby('Categoria')['Categoria'].transform('count')
        dfCategory.drop_duplicates(['Categoria'], inplace=True)
        return dfCategory;

    @staticmethod
    def createAuthorDF(df):
        dfAuthor = df[['Autor']].copy()
        dfAuthor['Quantidade de Artigos por Autor)'] = df.groupby('Autor')['Autor'].transform('count').astype(int)
        dfAuthor.drop_duplicates(['Autor'], inplace=True)
        return dfAuthor;

    @staticmethod
    def createMeanDF(df):
        mean_word_count = df['content'].str.split().apply(len).mean().round(2)
        return (pd.DataFrame({'Media (Por Artigo)': [mean_word_count]}))
        
    @staticmethod
    def createCSV(dfCategory, dfAuthor, dfMean):
        dfEmpty = pd.DataFrame(columns=[''])

        df_concat = pd.concat([dfCategory, dfEmpty, dfAuthor, dfEmpty, dfMean], axis=1)
        df_concat.to_csv(OUTPUT_FILE, index=False)
        print("CSV file saved successfully!")

if __name__ == '__main__':
    article = Article()

    df = article.createDataFrame(article.requestAPI(article.getParams()))
    article.createCSV(article.createCategoryDF(df), article.createAuthorDF(df), article.createMeanDF(df))