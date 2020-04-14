<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>


## Iniciando com front-end :rocket:

Neste módulo foram abordados diversos tópicos relacionados a front-end, sendo eles:

- A diferença entre Back-end e Front-end
- Conceitos iniciais de HTML e CSS
- Estrutura HTML
- Espaçamento com CSS Grid Layout
- Seleção e Manipulação dos elementos da DOM com Javascript

## Iniciando no Back-end :rocket:

No módulo de Back-end nós fomos introduzidos ao `nodejs` e `npm` para fazer a instalação de alguns pacotes que foram utilizadas nesse módulo.

- `Express` para a criação do servidor e rotas
- `Nodemon` para monitoramento dos arquivos e evitar o reinício manual do servidor
- `Nunjucks` como template engine para um front-end mais dinâmico

Durante o módulo foi criado um arquivo base para o front-end junto ao nunjucks, evitando assim a repetição de um mesmo código em várias paǵinas. 

Em seguido trazemos todos os dados dos vídeos para o back-end, no arquivo `data.js` e criamos uma feature para marcar alguns vídeos em destaque.

E para finalizar o módulo, substituímos o modal que trazia o vídeo por uma página que retorna o vídeo via `query params`.

````http
    http://localhost:5001/video?id=vqrjFnq3-uo
````