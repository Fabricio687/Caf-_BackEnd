const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth'); // Importa apenas as rotas de autenticação
const connectDB = require('./config/db');

// Carrega variáveis de ambiente do .env
dotenv.config();

// Conexão com o banco de dados
connectDB()
  .then(() => {
    // Apenas verifica se a conexão foi estabelecida
    console.log("✅ Conexão com MongoDB bem-sucedida.");
  })
  .catch(error => {
    console.error("❌ Falha crítica ao conectar ao DB:", error);
    process.exit(1);
  });

const app = express();

// Middlewares
app.use(cors()); // Permite requisições do seu App
app.use(express.json()); // Permite que o servidor entenda JSON

// Rotas da API
app.use('/api/auth', authRoutes); // Rota principal para Login e Registro

// Rota de teste
app.get('/', (req, res) => {
  res.send('API de Autenticação está rodando.');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
