# **Joke Hub**

  O Joke Hub é um sistema distribúido onde os usuário poderão buscar, salvar e ranquear piadas de um banco de dados que é sincronizado em tempo real por subreddits, mais de um /subrredit pode ser sincronizado.
  
## **Funcionalidades:**
- Buscar piadas em um banco de dados sincronizado em tempo real com o reddit
- Filtrar por melhor ranking
- Salvar piadas
- Ranquear piadas

## **Tecnologias**
- NodeJs
- Nats
- Typesense
- Reactjs
- Docker

## **Arquietura**
![image](https://user-images.githubusercontent.com/37680306/176293742-b0079165-dbd5-4f03-9c08-4f0af4c5eae4.png)

## Front end client
https://www.figma.com/file/CQzJiFWNejofNgoTdzNWp3/Untitled?node-id=0%3A1

# **Rodando cada aplicação**:

## **reddit-scrapepr**

Esse serviço tem como objetivo fazer um scraping dos subredits /jokes e /oneliners, e enviar esses dados para o tópico 'jokes' do nats. A linguagem implementada nesse projeto foi o python.

Instale o Nats:
https://nats.io/download/

Comandos para rodar
  
```
pip install asyncpraw
pip install asyncio
pip install nats-py
pip install python-dotenv
python reddit-scrapper/main.py
```

## **sync-typesense**
O sync-typesense é uma aplicação que recebe mensagens do reddit scrapper através da ferramenta de messageria [nats](https://nats.io/), e sincroniza com o banco do [typesense](https://typesense.org/) que gerencia o armazenamento consistente e cuida das buscas através de requisições http.

Navegue para o diretório sync-typesense
```
$ cd sync-typesense
```

### Primeiro instale as dependências:

```
$ yarn install
```

### Para realizar as funçôes do sync-typesense é necessario seguir os seguintes passos:

Instale o Docker e docker-compose: [Docker](https://www.docker.com/get-started/),
 ou se preferir rodar o servidor localmente acesse [typesense](https://typesense.org/) para mais informações


### Iniciando o servidor em um container:

```
$ docker-compose up
```

### Criação a collection no typesense:

```
$ node src/collection/create.js
```

### Para remover a coleção:

```
$ node src/collection/delete.js
```

### Iniciando o serviço de sincronização

```
$ node src/index.js
```

### Modelos de coleções e documentos

### Jokes:

#### Collection

```JSON
{
    "name": "jokes",
    "fields": [
        {"name": "id", "type": "string", "optional": false},
        {"name": "joke", "type": "string", "optional": false},
        {"name": "date", "type": "string", "optional": true},
        {"name": "users", "type": "string[]", "optional": true},
        {"name": "rating_average", "type": "int32", "optional": true},
        {"name": "rating_amount", "type": "int32", "optional": true},
    ],
    "default_sorting": "date",
}
```

#### Document

```Js
{
    "id": "1",
    "joke": "joke content",
    "date": 1632229601, // data em que a piada foi publicada,
    "ratind_average": 4, // média das avaliações da piada
    "rating_amount": 10, // quantidade de avaliações
}
```

## **front-end**

### Primeiro instale as dependências:

```
$ npm install
```

### Inicie a aplicação com:

```
$ npm start
```

