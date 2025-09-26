const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv'); // Importa a biblioteca dotenv
const authRoutes = require('./routes/auth');
const connectDB = require('./config/db');

// Carrega variáveis de ambiente do .env
dotenv.config();

// Conexão com o banco de dados
connectDB();

const app = express();

// Middlewares
app.use(cors()); // Permite requisições de outras origens
app.use(express.json()); // Permite que o servidor entenda JSON no corpo das requisições

// Rotas da API
app.use('/api/auth', authRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.send('API está rodando...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});