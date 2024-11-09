
## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (versão 8 ou superior) ou yarn

## Instalação

1. Clone o repositório:

    ```sh
    git clone https://github.com/anaeli-silva/credit-carbon
    cd credit-carbon
    ```

2. Instale as dependências:

    ```sh
    npm install
    ```

    ou

    ```sh
    yarn install
    ```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto com base no arquivo [.env.example](.env.example).

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm run dev` ou `yarn dev`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:5173) para visualizá-lo no navegador.

### `npm run build` ou `yarn build`

Compila o aplicativo para produção na pasta `dist`.

### `npm run preview` ou `yarn preview`

Visualiza a compilação de produção localmente.

### `npm run lint` ou `yarn lint`

Executa o linter para verificar problemas no código.

## Estrutura de Pastas

- [components](./src/components/): Componentes React reutilizáveis.
- [context](./src/context/): Provedores de contexto para gerenciamento de estado.
- [hooks](./src/hooks/): Hooks personalizados.
- [pages](./src/pages/): Páginas da aplicação.
- [router](./src/router/): Configuração de rotas.
- [styles](./src/styles/): Arquivos de estilo.
- [utils](./src/utils/): Funções utilitárias.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça um push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.
