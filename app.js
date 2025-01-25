import express from 'express';
import calcularJurosCompostos from './src/calculo.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/calcular', (req, res) => {
    const { principal, taxa, tempo } = req.body;

    if (!principal || !taxa || !tempo) {
        return res.status(400).send('Todos os campos (principal, taxa, tempo) são obrigatórios.');
    }

    if (isNaN(principal) || isNaN(taxa) || isNaN(tempo)) {
        return res.status(400).send('Os campos devem ser números válidos.');
    }

    const principalNum = parseFloat(principal);
    const taxaNum = parseFloat(taxa);
    const tempoNum = parseFloat(tempo);

    const jurosCompostos = calcularJurosCompostos(principalNum, taxaNum, tempoNum);

    //debug
    console.log({ principalNum, taxaNum, tempoNum, jurosCompostos });

    if (typeof jurosCompostos !== 'number' || isNaN(jurosCompostos)) {
        return res.status(500).send('Erro no cálculo dos juros compostos.');
    }

    return res.send(`R$ ${jurosCompostos.toFixed(2)}`);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});