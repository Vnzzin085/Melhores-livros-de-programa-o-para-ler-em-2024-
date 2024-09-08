function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById('resultados-pesquisa');
  let campoPesquisa = document.getElementById("campo-pesquisa").value
  console.log(campoPesquisa);

  // se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML = "<p>nada foi encontrado</p>"
    return
  }
  campoPesquisa = campoPesquisa.toLowerCase()
    
    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = "";
    let titulos = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado da lista de resultados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      // se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)
      || tags.includes(campoPesquisa)) {
        //cria um novo elemento
        resultados += `<div class="item-resultado">
                        <h2> <a href="#" target="_blank">${dado.titulo}</a></h2>
                        <p class="descriçao-meta">${dado.descricao}</p>
                        <a href=${dado.link} target="_blank">Mais informações</a>
                      </div>`;
    }
      
      
      // Cria um novo elemento div para cada resultado, formatando-o com as informações do dado
      
    }

    if (!resultados){
      resultados = "<p>nada foi encontrado</p>"
    }  
    // Atualiza o conteúdo da seção com os resultados formatados
    section.innerHTML = resultados;
  }


