//Functions Async


const fs = require('fs')

// Exemplo 01 Bucando arquivo

// console.log("Antes de ler o arquivo")

// fs.readFile("arquivo.txt", (erro, conteudoDoArquivo ) => {
//     if(erro){
//         console.log("Ocorreu um erro ao tentar ler o arquivo", erro)
//     } else {
//         console.log(String(conteudoDoArquivo))
//     }
// })

// console.log("Depois de ler o arquivo")


//Exemplo setTimout

// console.log("Antes do serTimout")

// setTimeout(() => {
//     console.log("Isso aqui será execultado após 2 segundos")
// }, 2000)

// console.log("Depois do setTimout")


//Exemplo 3 Promises (Promesas)

// console.log("Antes da criação da promise")

//  const leituraDeDadoserAquivoPromesa = () => new Promise((resolve, reject) => {
//      fs.readFile("arquivo.txt", (erro, conteudoDoArquivo ) => {
//             if(erro){
//                  console.log("Ocorreu um erro ao tentar ler o arquivo", erro)
//              } else {
//                   console.log(String(conteudoDoArquivo))
//               }
//               })
//  })

// lerAquivoPromesa()
// .then((retornoDaPromessa) => {
//     console.log("Deu certo", retornoDaPromessa)
// })
// .catch((erro) => {
//     console.log("Deu ruim", erro)
// })
// .finally(() => {
//     "Ele sera execultado independente de sucesso ou fracaso"
// })


//Exemplo 4, Async e await

const leituraDeDadoserAquivoPromesa = () => {
    return new Promise((resolve, reject) => {
      fs.readFile('arquivo.txt', 'utf8', (erro, conteudoDoArquivo) => {
        if (erro) {
          reject('Ocorreu um erro ao tentar ler o arquivo: ' + erro);
        } else {
          resolve(conteudoDoArquivo);
        }
      });
    });
  };
  
  async function leituraDeDados() {
    console.log('Isso é executado antes da promessa');
  
    try {
      const retornoDaPromessa = await leituraDeDadoserAquivoPromesa();
      console.log('Executado DEPOIS da promessa');
      console.log(retornoDaPromessa);
      console.log('Executado DEPOIS da promessa');
    } catch (erro) {
      console.log(erro);
      console.log('Não está disponível');
    }
    finally {
        console.log("Isso aqui sera execultado independente de sucesso ou fracaso")
    }
  }
  
  leituraDeDados();