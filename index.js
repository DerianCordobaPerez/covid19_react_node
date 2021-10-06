import Express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = Express();

app.get('/', (req, res)=>{
    res.send('Funcionando.');
});


const _PORT = process.env.PORT || 8080;
app.listen(_PORT, ()=>{
    console.log('Funcionando');
});