# Gerenciador de Cinema

Este é o repositório do projeto **Gerenciador de Cinema**, uma aplicação web desenvolvida em Angular que permite aos usuários explorar e gerenciar informações sobre filmes. A aplicação oferece funcionalidades como visualizar os melhores filmes, os filmes em alta, seus filmes favoritos e realizar buscas por filmes.

Você pode acessar a aplicação diretamente [aqui](https://gerenciador-de-cinema-3dgv.onrender.com/view/home/melhores/1).

## Funcionalidades

### Melhores Filmes

Nesta seção, você pode encontrar os filmes mais votados pela comunidade. Os filmes são apresentados em forma de grid, cada um contendo as seguintes informações:
- ID
- URL do poster
- Nome do filme

### Filmes em Alta

Aqui, você pode descobrir os filmes que estão em alta no momento. Os filmes são exibidos em um layout de grid e fornecem detalhes semelhantes aos apresentados na seção de Melhores Filmes.

### Meus Filmes (Favoritos)

Nesta página, você pode gerenciar sua lista de filmes favoritos. Você tem a capacidade de adicionar ou remover filmes da lista de favoritos. Os filmes favoritos também são exibidos na tela inicial, na forma de posters.

### Barra de Busca

A barra de busca permite que você pesquise filmes com base em uma palavra-chave. Os resultados da pesquisa são exibidos em uma lista, proporcionando informações detalhadas sobre os filmes encontrados.

## Detalhes do Filme

Ao clicar em um filme na lista de Melhores Filmes, Filmes em Alta ou na lista de favoritos, você será direcionado para uma página com detalhes do filme. As informações apresentadas incluem:
- Título do filme
- Título original
- Data de lançamento
- Pôster principal
- Trailer (ou trailers)
- Gêneros
- Sinopse
- Créditos (diretor e elenco)

## Detalhes do Ator

Ao clicar em um ator na página de detalhes do filme, você será levado a uma página de detalhes do ator. As informações exibidas nesta página incluem:
- Nome do ator
- Carrossel de fotos
- Biografia
- Filmografia do ator, que, ao ser clicada, redireciona para a página de detalhes do filme correspondente.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:
- Angular
- TypeScript
- HTML
- CSS
- Bootstrap
- API TMDB

## Armazenamento de Dados

Os filmes marcados como favoritos são armazenados localmente no navegador do usuário usando o LocalStorage.

Divirta-se explorando o mundo do cinema com o Gerenciador de Cinema!
