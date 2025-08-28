# Frontend - AI email analyzer

## Stack de Tecnologias

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Gerenciador de Estado de API:** [TanStack Query (React Query)](https://tanstack.com/query/latest)
* **Componentes UI:** [Shadcn/UI](https://ui.shadcn.com/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **Validação de Formulários:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
* **Gerenciador de Pacotes:** [pnpm](https://pnpm.io/)

## Features

* Interface de página única (SPA) com alternância de visualização para entrada de dados e resultados.
* Duas formas de submissão: colar texto de um único e-mail ou fazer upload de um arquivo (`.csv`/`.xlsx`) para processamento em lote.
* Validação de formulário em tempo real.
* Feedback visual para estados de carregamento, sucesso e erro.
* Exibição organizada dos resultados em cards, com opção de copiar a resposta sugerida.
* Design totalmente responsivo para desktops e dispositivos móveis.

***Observação***: o arquivo .csv ou .xlsx eve conter uma única coluna com o cabeçalho `texto_do_email`. No arquivo csv, texto de cada linha **deve estar entre aspas**.

## Como Executar Localmente

Siga os passos abaixo para configurar e rodar o projeto frontend na sua máquina local.

### 1. Pré-requisitos

* [Node.js](https://nodejs.org/en) (versão 18 ou superior)
* [pnpm](https://pnpm.io/installation) instalado globalmente.

### 2. Instalação

Primeiro, navegue para a pasta do frontend e instale as dependências do projeto usando `pnpm`.

```bash
# A partir da raiz do monorepo
cd frontend

# Instale as dependências
pnpm install
```

### 3. Configuração das Variáveis de Ambiente

1.  Na raiz da pasta `/frontend`, crie um arquivo chamado `.env.local`.
2.  Adicione a seguinte variável a ele. Use a URL local para desenvolvimento ou a URL do Render para testar com o backend em produção:

    ```
    # Para desenvolvimento local
    NEXT_PUBLIC_API_URL=http://127.0.0.1:8000

    # Para conectar ao backend em produção (Render)
    # NEXT_PUBLIC_API_URL=https://email-classifier-api-ef03.onrender.com
    ```

### 4. Rodando o Servidor de Desenvolvimento

Com as dependências instaladas e as variáveis de ambiente configuradas, inicie o servidor de desenvolvimento do Next.js.

```bash
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação em funcionamento.
