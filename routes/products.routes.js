const express = require('express');
const router = express.Router();

// Dados de exemplo simples (MOCK) para evitar o erro 404 no frontend
const MOCK_PRODUCTS = {
    products: [
        {
            _id: "1",
            id: "1",
            title: "Cappuccino",
            description: "Café com leite cremoso.",
            price: 3.50,
            category: "Bebidas",
            ingredients: ["Café", "Leite"],
            thumbnail: { uri: "https://placehold.co/100x100/967864/white?text=C1" },
            cover: { uri: "https://placehold.co/300x200/967864/white?text=C1" },
        },
        {
            _id: "2",
            id: "2",
            title: "Croissant",
            description: "Manteiga e folhado.",
            price: 5.50,
            category: "Doces",
            ingredients: ["Massa Folhada"],
            thumbnail: { uri: "https://placehold.co/100x100/967864/white?text=C2" },
            cover: { uri: "https://placehold.co/300x200/967864/white?text=C2" },
        }
    ]
};

// Rota GET /products
router.get('/products', (req, res) => {
    // Retorna os dados de exemplo para o seu aplicativo
    res.json(MOCK_PRODUCTS);
});

module.exports = router;
