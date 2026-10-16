# 🎬 Exercício Final - Lógica de Programação

## 📌 Introdução

Este repositório contém a resolução do exercício final de um curso de Lógica de Programação, desenvolvido com JavaScript e Node.js.

O projeto tem como objetivo colocar em prática os fundamentos da programação, trabalhando com vetores e organização de código, além de utilizar testes automatizados para verificar o comportamento da solução implementada.

## 🛠️ Tecnologias utilizadas

- **JavaScript:** linguagem utilizada no desenvolvimento da solução.
- **Node.js:** ambiente de execução do JavaScript fora do navegador.
- **Node.js Test Runner (`node:test`):** ferramenta nativa utilizada para executar os testes automatizados.
- **npm:** gerenciador de pacotes utilizado para instalar dependências e executar scripts do projeto.
- **Git e GitHub:** ferramentas utilizadas para versionamento e armazenamento do código-fonte.

## 📂 Estrutura do repositório

```text
exercicio-final-logica-de-programacao/
├── docs/                   # Documentação do exercício
├── src/
│   └── avaliacaoFilmes.js  # Arquivo principal da solução
├── test/                   # Arquivos de testes automatizados
├── .gitignore              # Arquivos e pastas ignorados pelo Git
├── package.json            # Configurações e scripts do projeto
├── package-lock.json       # Registro das versões das dependências
└── README.md               # Documentação principal do projeto
```

## 📄 Objetivo de cada grupo de arquivos

### `src/` - Código-fonte

Contém a implementação da solução do exercício.

- `avaliacaoFilmes.js`: arquivo principal do projeto, responsável por concentrar a lógica da avaliação de filmes.

### `test/` — Testes automatizados

Diretório destinado aos testes da solução, permitindo verificar os comportamentos esperados e identificar possíveis falhas na implementação.

Os testes são executados utilizando o recurso nativo `node:test` do Node.js.

### `docs/` - Documentação

Diretório destinado aos materiais complementares e às informações relacionadas ao exercício, facilitando a consulta dos requisitos e das decisões de implementação.

### Arquivos de configuração

- `package.json`: define os metadados do projeto, o arquivo principal e o comando utilizado para executar os testes.
- `package-lock.json`: registra as versões exatas das dependências instaladas.
- `.gitignore`: especifica quais arquivos e diretórios não devem ser versionados.
- `README.md`: apresenta o projeto e orienta sobre sua instalação e execução.

## ⚙️ Instalação

### Pré-requisitos

Antes de começar, instale:

- [Node.js](https://nodejs.org/), preferencialmente uma versão LTS.
- [Git](https://git-scm.com/), para clonar o repositório.

Para verificar se as ferramentas estão instaladas, execute:

```bash
node --version
npm --version
git --version
```

### 1. Clone o repositório

```bash
git clone https://github.com/ghcsiqueira/exercicio-final-logica-de-programacao.git
```

### 2. Acesse o diretório do projeto

```bash
cd exercicio-final-logica-de-programacao
```

### 3. Instale as dependências

```bash
npm install
```

## ▶️ Execução do projeto

### Executar a solução

Para executar diretamente o arquivo principal:

```bash
node src/avaliacaoFilmes.js
```

### Executar os testes automatizados

Para executar os testes configurados no projeto, utilize:

```bash
npm test
```

Esse comando executa o script definido no `package.json`:

```json
{
  "scripts": {
    "test": "node --test"
  }
}
```

O resultado apresenta os testes executados e indica se foram aprovados ou se apresentaram falhas.

## 🎯 Objetivos de aprendizado

Este exercício faz parte da minha jornada de aprendizado em programação e tem como propósito consolidar conhecimentos fundamentais, como:

- Aplicação da lógica de programação na resolução de problemas.
- Manipulação de vetores em JavaScript.
- Organização e estruturação de código.
- Execução de testes automatizados.
- Uso do Node.js e do npm.
- Versionamento de código com Git e GitHub.

## 👨‍💻 Autor

**Gustavo Siqueira**

[GitHub — ghcsiqueira](https://github.com/ghcsiqueira)

---

Desenvolvido como parte dos estudos em Lógica de Programação.
