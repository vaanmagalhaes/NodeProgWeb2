import app from "./src/app.js";
import conexao from "./src/app/database/index.js";
const port = 3000;

//realizando a conexão
//conexao.connect((erro) => {
 //       if(erro) {
//        console.log("Erro na conexão: ", erro)
  //  } else {
    //    console.log("Conectado com sucesso!")
    //}
//});


//escutando a porta
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
