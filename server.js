import express from 'express';
const app = express();
const port = 3000;


app.use(express.json());

let pessoas =[
    {id: 1, nome: 'Renan Aprigio'},
    {id: 2, nome: 'Matheus Luciano'},
    {id: 3, nome: 'V1'}
];

app.listen(port, () =>{
    console.log(`Servidor em execução: http://localhost:${port}`);
});

