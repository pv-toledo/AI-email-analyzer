# Analisador Inteligente de E-mails com IA

[**Acessar a aplicação ao vivo**](https://ai-email-analyzer.vercel.app)

## Sobre o Projeto

Esta é uma aplicação web full-stack desenvolvida para automatizar a análise de emails, classificando-os em categorias de produtividade e gerando respostas automáticas e contextuais através de Inteligência Artificial.

A aplicação permite que o usuário envie um único e-mail ou um arquivo em lote (`.csv`/`.xlsx`) e receba a classificação do email e uma sugestão de resposta, otimizando o fluxo de trabalho e liberando tempo da equipe.

Este repositório é um **monorepo**, contendo tanto o backend quanto o frontend da aplicação em pastas separadas.

## Arquitetura e Stack de Tecnologias

A solução é dividida em dois serviços principais:

### Backend (`/backend`)

API construída em Python, responsável por toda a lógica e processamento de IA.

* **Framework:** FastAPI
* **IA (Geração de resposta e Classificação):** Google Gemini (gemini-1.5-flash)
* **Processamento de Dados:** Pandas
* **Validação:** Pydantic
* **Hospedagem:** Render

➡️ [**Clique aqui para ver o README detalhado do Backend**](./backend/README.md)

###  Frontend (`/frontend`)

Uma interface de usuário moderna e responsiva, construída no ecossistema React.

* **Framework:** Next.js (App Router)
* **Linguagem:** TypeScript
* **Componentes UI:** Shadcn/UI
* **Estilização:** Tailwind CSS
* **Gerenciamento de Estado de API:** TanStack Query (React Query)
* **Validação de Formulários:** React Hook Form & Zod
* **Gerenciador de Pacotes:** pnpm
* **Hospedagem:** Vercel

➡️ [**Clique aqui para ver o README detalhado do Frontend**](./frontend/README.md)

## Como executar o projeto completo localmente

Siga os passos abaixo para configurar e rodar tanto o backend quanto o frontend na sua máquina.

### 1. Pré-requisitos

* Python (versão 3.10 ou superior)
* Node.js (versão 18 ou superior)
* pnpm instalado globalmente (`npm install -g pnpm`)

### 2. Clonar o repositório

```bash
git clone https://github.com/pv-toledo/AI-email-analyzer.git
cd AI-email-analyzer
```

### 3. Configurar o backend

Abra um terminal na raiz do projeto.

```bash
# 1. Navegue para a pasta do backend
cd backend

# 2. Crie e ative o ambiente virtual
python -m venv venv
.\venv\Scripts\activate

# 3. Instale as dependências Python
pip install -r requirements.txt

# 4. Crie o arquivo .env e adicione sua chave da API do Google
# (Veja o backend/README.md para mais detalhes)
```

### 4. Configurar o frontend

Abra um **segundo terminal** na raiz do projeto.

```bash
# 1. Navegue para a pasta do frontend
cd frontend

# 2. Instale as dependências Node.js
pnpm install

# 3. Crie o arquivo .env.local e adicione a URL da API
# (Veja o frontend/README.md para mais detalhes)
```

### 5. Rodar a aplicação

Com os dois terminais abertos e configurados:

* **No terminal do backend:**
  ```bash
  # (dentro da pasta /backend com o venv ativo)
  uvicorn main:app --reload
  ```

* **No terminal do frontend:**
  ```bash
  # (dentro da pasta /frontend)
  pnpm run dev
  ```

A API estará disponível em `http://127.0.0.1:8000` e a interface web em `http://localhost:3000`.

