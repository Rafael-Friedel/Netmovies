# NetMovies

> A ideia do projeto é buscar informações de filmes em uma api pública, e retornar ao usuário os filmes contendo a palavra digitada, e podendo também buscar mais detalhes sobre o filme escolhido, como sinopse e filmes relacionados e/ou similares.

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [ ] estilização
- [x] iniciar readme
- [ ] subir o projeto pra nuvem e disponibilizar
- [ ] trazer um gif da aplicação funcionando
- [ ] implementar testes

### Desafios

Trazer uma boa experiência ao usuário, fazendo uso da api https://developers.themoviedb.org/3/getting-started/introduction. A página deve possuir uma opção de busca onde pode se buscar filmes pelo título, mostrando a lista de filmes e podendo selecioná-lo e obter mais detalhes do filme em português.


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
