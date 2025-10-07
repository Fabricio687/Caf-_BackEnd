const Product = require('../models/Product');
// Importa os dados do cardápio que você me enviou
const { MENU } = require('../utils/menuData'); 

// Função para buscar todos os produtos (será chamada pelo seu App)
exports.getProducts = async (req, res) => {
  try {
    // Busca todos os produtos no MongoDB
    const products = await Product.find().sort({ category: 1, title: 1 });
    res.json({ products });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produtos.', error: error.message });
  }
};

// Função para inicializar o banco de dados com os produtos do seu cardápio (só roda na 1ª vez)
exports.initializeProducts = async () => {
  try {
    const count = await Product.countDocuments();
    if (count === 0) {
      console.log('Nenhum produto encontrado. Inserindo dados iniciais...');

      // Transforma seus dados locais (MENU) no formato que o Mongoose precisa
      const mappedProducts = MENU.flatMap(section => 
        section.data.map(p => ({
          ...p,
          category: section.title, // Pega a categoria do título da seção
          id: p.id.toString(), // Garante que o ID é uma string para o modelo
        }))
      );
      
      await Product.insertMany(mappedProducts);
      console.log(`✅ ${mappedProducts.length} produtos iniciais inseridos com sucesso no MongoDB.`);
    } else {
      console.log(`✅ Produtos já existem no banco de dados (${count} encontrados).`);
    }
  } catch (e) {
    console.error('❌ Falha ao inicializar produtos:', e.message);
  }
};
