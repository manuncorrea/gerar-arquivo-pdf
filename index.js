var pdf = require("html-pdf");


var nomeDoUsuario = 'Emanuele Correa';
var curso = 'NodeJS'

var conteudo = `
  <h1 style='color: red'>AGORA SIM EIN!</h1>
  <hr>
  <p>Esse é um arquivo pdf</p>
  <p>Nome: ${nomeDoUsuario}</p>
  <p>Curso: ${curso}</p>
  <img src='https://avatars.githubusercontent.com/u/15049865?v=4' />
`

pdf.create(conteudo,{}).toFile("./meupdf.pdf", (err, res) => {
  if(err) {
    console.log("Um erro aconteceu!!")
  }else{
    console.log(res)
  }
});

//gerar arquivo pdf = node index.js