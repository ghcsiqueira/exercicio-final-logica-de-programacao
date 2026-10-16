
function classificaFilmes(filmes) {
    return filmes.map((filme) => {
      const quantidadeAvaliacoes = filme.avaliações.length;
  
      if (quantidadeAvaliacoes === 0) {
        return {
          nome: filme.nome,
          quantidadeAvaliacoes: 0,
          media: null,
          classificacao: "Filme sem avaliações",
        };
      }
  
      const somaNotas = filme.avaliações.reduce(
        (soma, nota) => soma + nota,
        0
      );
  
      const media = somaNotas / quantidadeAvaliacoes;
  
      let classificacao;
  
      if (media >= 4) {
        classificacao = "Filme recomendado";
      } else if (media >= 3) {
        classificacao = "Filme razoável";
      } else {
        classificacao = "Filme ruim";
      }
  
      return {
        nome: filme.nome,
        quantidadeAvaliacoes,
        media: Number(media.toFixed(2)),
        classificacao,
      };
    });
  }
  
  module.exports = { classificaFilmes };
  