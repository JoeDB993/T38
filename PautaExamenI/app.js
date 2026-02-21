const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

const libros = [{"id":1,"titulo":"La comunidad del anillo","autor":"Jrr tolkien","anioPublicacion":1955,"estado":"Disponible"}]

app.get("/libros",(req,res)=>{
    res.json({status:200,message:'Success',data:libros});

});


app.listen(PORT, ()=>{
    console.log(`Escuchando en http://localhost:${PORT}/`);
});