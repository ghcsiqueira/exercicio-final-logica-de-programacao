
const { test } = require("node:test");
const assert = require("node:assert/strict");

const { classificaFilmes } = require("../src/classificaFilme");

test("Deve recomendar um filme com média maior ou igual a 4", () => {
  const filmes = [
    {
      nome: "Minha mãe é uma peça",
      avaliações: [5, 4, 4, 4, 5]
    }
  ];

  const resultado = classificaFilmes(filmes);

  assert.equal(resultado[0].quantidadeAvaliacoes, 5);
  assert.equal(resultado[0].media, 4.4);
  assert.equal(resultado[0].classificacao, "Filme recomendado");
});

test("Deve classificar como razoável um filme com média entre 3 e 4", () => {
  const filmes = [
    {
      nome: "Saneamento Básico",
      avaliações: [3, 4, 2, 3, 4]
    }
  ];

  const resultado = classificaFilmes(filmes);

  assert.equal(resultado[0].quantidadeAvaliacoes, 5);
  assert.equal(resultado[0].media, 3.2);
  assert.equal(resultado[0].classificacao, "Filme razoável");
});

test("Deve classificar como ruim um filme com média menor que 3", () => {
  const filmes = [
    {
      nome: "Se eu fosse você",
      avaliações: [1, 2, 3]
    }
  ];

  const resultado = classificaFilmes(filmes);

  assert.equal(resultado[0].quantidadeAvaliacoes, 3);
  assert.equal(resultado[0].media, 2);
  assert.equal(resultado[0].classificacao, "Filme ruim");
});

test("Deve informar quando um filme não possui avaliações", () => {
  const filmes = [
    {
      nome: "Filme sem votos",
      avaliações: []
    }
  ];

  const resultado = classificaFilmes(filmes);

  assert.equal(resultado[0].quantidadeAvaliacoes, 0);
  assert.equal(resultado[0].media, null);
  assert.equal(
    resultado[0].classificacao,
    "Filme sem avaliações"
  );
});
