# Projeto API de Blogs

Neste projeto, desenvolvi uma API e um banco de dados para a produção de conteúdo de um blog. A API permite a criação, visualização, atualização e exclusão de posts, categorias e usuários. Além disso, a API tem endpoints para autenticação de usuários e busca de posts por termos de pesquisa. Utilizei o pacote Sequelize para interagir com o banco de dados MySQL e seguirá os princípios do REST na implementação dos endpoints.

## O que foi desenvolvido

O projeto consiste em uma API que suporta as seguintes funcionalidades:

1. **Migrations**: Criei migrations para as tabelas `users`, `categories`, `blog_posts` e `posts_categories`.

2. **Model User**: Criei o modelo `User` em `src/models/User.js` com as propriedades corretas.

3. **Endpoint POST /login**: Implementei o endpoint `/login` que permite a autenticação de usuários. O endpoint recebe um corpo de requisição com o formato:

   ```json
   {
     "email": "lewishamilton@gmail.com",
     "password": "123456"
   }
   ```

4. **Endpoint POST /user**: Criei o endpoint `/user` que adiciona um novo usuário à tabela no banco de dados. O corpo da requisição segue esse formato:

   ```json
   {
     "displayName": "Brett Wiltshire",
     "email": "brett@email.com",
     "password": "123456",
     "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
   }
   ```

5. **Endpoint GET /user**: Implementei o endpoint `/user` que lista todos os usuários do banco de dados.

6. **Endpoint GET /user/:id**: Criei o endpoint `/user/:id` que traz um usuário específico com base no ID fornecido na URL.

7. **Model Category**: Criei o modelo `Category` em `src/models/Category.js` com as propriedades corretas.

8. **Endpoint POST /categories**: Implementei o endpoint `/categories` que adiciona uma nova categoria à tabela no banco de dados. O corpo da requisição segue este formato:

   ```json
   {
     "name": "Typescript"
   }
   ```

9. **Endpoint GET /categories**: Criei o endpoint `/categories` que lista todas as categorias do banco de dados.

10. **Model BlogPost**: Criei o modelo `BlogPost` em `src/models/BlogPost.js` com as propriedades e associações corretas, incluindo a relação N:1 com o modelo `User`.

11. **Model PostCategory**: Criei o modelo `PostCategory` em `src/models/PostCategory.js` com as propriedades e associações corretas, incluindo a relação N:N entre os modelos `BlogPost` e `Category`.

12. **Endpoint POST /post**: Implementei o endpoint `/post` que adiciona um novo post de blog e vinculá-o a categorias no banco de dados. O corpo da requisição segue este formato:

    ```json
    {
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key",
      "categoryIds": [1, 2]
    }
    ```

13. **Endpoint GET /post**: Criei o endpoint `/post` que lista todos os posts de blog, incluindo informações sobre o usuário autor e as categorias associadas.

14. **Endpoint GET /post/:id**: Implementei o endpoint `/post/:id` que traz um post de blog específico com base no ID fornecido na URL.

15. **Endpoint PUT /post/:id**: Criei o endpoint `/post/:id` que atualiza um post de blog específico. A atualização é permitida apenas pelo usuário dono do post, e apenas os atributos `title` e `content` podem ser alterados. O corpo da requisição segue este formato:

    ```json
    {
      "title": "Updated Title",
      "content": "Updated content."
    }
    ```

16. **Endpoint DELETE /post/:id**: Implementei o endpoint `/post/:id` que deleta um post de blog com base no ID fornecido na URL. A deleção é permitida apenas pelo usuário dono do post.

17. **Endpoint DELETE /user/me**: Criei o endpoint `/user/me` que permite que um usuário delete sua própria conta. A autenticação é necessária para realizar essa operação.

18. **Endpoint GET /post/search?q=:searchTerm**: Desenvolvi o endpoint `/post/search` que permite buscar posts de blog com base em um termo de pesquisa fornecido no parâmetro de consulta `q=searchTerm`. A API retorna um array de posts que contenham o termo no título ou no conteúdo.

Neste projeto, tive a oportunidade de aprimorar as seguintes habilidades:

- Desenvolvimento de uma API RESTful com Node.js e Express.
- Utilização do pacote Sequelize para interagir com um banco de dados MySQL.
- Implementação de autenticação de usuários e validação de tokens.
- Criação de modelos e migrações para definição e manipulação de tabelas no banco de dados.
- Trabalho com associações entre modelos, incluindo relacionamentos N:1 e N:N.
- Desenvolvimento de testes para verificar o funcionamento correto da API.

## Como usar

Para testar os endpoints da API, você pode usar ferramentas como o Postman ou o Insomnia. Certifique-se de configurar a conexão com o banco de dados na aplicação.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- Node.js
- Express
- Sequelize
- Integração com banco de dados MySQL

## Contato

- [Pedro Henrique] - [pedrohalmeidamendonca@gmail.com]
- [LinkedIn](https://www.linkedin.com/in/pedrohxiv/)
- [GitHub](https://github.com/pedrohxiv)

---

**Nota:** Este projeto é uma oportunidade para demonstrar minhas habilidades no desenvolvimento de APIs com Node.js, Express, Sequelize e integração com banco de dados MySQL. Sinta-se à vontade para explorar e entre em contato se tiver alguma pergunta ou feedback!
