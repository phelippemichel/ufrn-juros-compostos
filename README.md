# Calculadora de Juros Compostos - Trabalho UFRN

Esta é uma aplicação Node.js que calcula juros compostos com base nos valores fornecidos por meio de uma requisição POST.

## Pré-requisitos

Certifique-se de que você tenha o seguinte instalado:
- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Como configurar

1. Clone este repositório:
   ```bash
   git clone https://github.com/alanmartinsdeazevedo/juros-compostos.git
   ```
2. Navegue para o diretório do projeto:
   ```bash
   cd calculadora-juros-compostos
   ```
3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

## Como executar

Inicie o servidor com o seguinte comando:
```bash
npm start
# ou
yarn start
```

O servidor estará rodando em `http://localhost:3000`.

## Como usar

Faça uma requisição POST para a rota `/calcular` com os seguintes campos no corpo da requisição, em formato JSON:

- `principal` (número): O valor principal.
- `taxa` (número): A taxa de juros anual (em %).
- `tempo` (número): O tempo (em anos).

Exemplo de corpo da requisição:
```json
{
  "principal": 1000,
  "taxa": 5,
  "tempo": 12
}
```

### Exemplo de resposta
Se os dados forem válidos, a aplicação retornará o valor dos juros compostos formatado em reais:
```
R$ 795.86
```

### Executando os Testes
O projeto utiliza o framework Jest para testes automatizados. Para rodar os testes, use o comando:
```bash
npm test
# ou
yarn test
```
Os testes estão localizados no diretório tests e verificam a lógica de cálculo de juros compostos.

### Testando com o Postman ou cURL

#### Usando cURL:
```bash
curl -X POST http://localhost:3000/calcular \
-H "Content-Type: application/json" \
-d '{"principal": 1000, "taxa": 5, "tempo": 12}'
```

#### Usando Postman:
1. Abra o Postman.
2. Configure a requisição para `POST`.
3. Insira a URL `http://localhost:3000/calcular`.
4. Vá para a aba "Body", selecione "raw" e o tipo `JSON`.
5. Cole o seguinte exemplo no corpo:
   ```json
   {
     "principal": 1000,
     "taxa": 5,
     "tempo": 12
   }
   ```

6. Envie a requisição.

## Estrutura do Projeto

```plaintext
calculadora-juros-compostos/
│
├── src/
│   ├── calculo.js                     # Função para calcular juros compostos
│
├── tests/
│   ├── calcularJurosCompostos.test.js # Teste unitário para a lógica de cálculo
│
├── app.js                             # Servidor principal
├── package.json                       # Configuração do projeto Node.js
├── README.md                          # Instruções de uso
├── .gitignore                         # Arquivos a serem ignorados pelo Git
```