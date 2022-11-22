![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/94491944/203108081-827a3385-4ea0-4834-98eb-573cc2a4164d.gif)


# NetMovies

> A ideia do projeto é buscar informações de filmes em uma api pública, e retornar ao usuário os filmes contendo a palavra digitada, e podendo também buscar mais detalhes sobre o filme escolhido, como sinopse e filmes relacionados e/ou similares.


## 🚀 Link de acesso do app

Segue o link da aplicação para poderem testar minha aplicação. Usei o vercel para subir a aplicação. [Aplicativo de filmes](https://netmovies-khaki.vercel.app/).

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] estilização
- [x] iniciar readme
- [x] subir o projeto pra nuvem e disponibilizar
- [x] trazer um gif da aplicação funcionando
- [x] implementar testes

### Tecnologias utilizadas

- React
- Next **(1ª vez que utilizei este framework)**
- CSS
- Bulma **(1ª vez que utilizei este framework)**
- Jest
- axios
- ReactHooks
- ContextApi


### Desafios

Trazer uma boa experiência ao usuário, fazendo uso da [seguinte api](https://developers.themoviedb.org/3/getting-started/introduction). A página deve possuir uma opção de busca onde pode se buscar filmes pelo título, mostrando a lista de filmes e podendo selecioná-lo e obter mais detalhes do filme em português.


## 🚀 Rodando o  NetMovies local

Para rodar o NetMovies local, siga estas etapas:

Linux e macOS:
```
git clone git@github.com:Rafael-Friedel/Netmovies.git && cd Netmovies/test-gethub
```

```
npm i && npm run dev
```

```
cat > .env.local 
```

digite sua key:
```
NEXT_PUBLIC_MY_KEY={SUA_KEY_AQUI}
```

Aperte CTRL+Z 

```
npm run dev
```

Basta abrir em seu navegador:

```
http://localhost:3000/movies
```




