// Dados locais que serão carregados no MongoDB
const MENU = [
    // Seção de bebidas
    {
      title: "Bebidas", // Nome da categoria
      data: [ // Array de produtos desta categoria
        {
          id: "1", // ID único do produto
          title: "Cappuccino", // Nome do produto
          price: 3.50, // Preço em reais
          description:
            "Nosso espresso especial encontra xarope de chocolate branco e leite vaporizado, finalizado com calda de caramelo. Uma delícia doce e cremosa.",
          cover: { uri: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" }, 
          thumbnail: { uri: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
          ingredients: [ 
            "Espresso", "Leite", "Xarope de Chocolate Branco", "Calda de Caramelo"
          ],
        },
        {
          id: "2",
          title: "Latte",
          price: 4.00,
          description:
            "Espresso suave com leite vaporizado e uma camada delicada de espuma. Equilíbrio perfeito entre café e creme.",
          cover: { uri: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
          thumbnail: { uri: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
          ingredients: [
            "Espresso", "Leite Vaporizado", "Espuma"
          ],
        },
        // ... Adicione o restante dos produtos aqui (id: 3, 4, 5, 6, 7)
      ],
    },
    // Seção de doces
    {
      title: "Doces",
      data: [
        {
          id: "5",
          title: "Croissant de Chocolate",
          price: 5.50,
          description:
            "Croissant amanteigado e folhado recheado com chocolate rico. Combinação perfeita com qualquer café.",
          cover: { uri: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
          thumbnail: { uri: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
          ingredients: [
            "Croissant Amanteigado", "Chocolate Amargo"
          ],
        },
        // ... e o resto dos seus doces e salgados
      ],
    },
    // Seção de salgados
    {
      title: "Salgados",
      data: [
        {
          id: "7",
          title: "Torrada de Abacate",
          price: 8.50,
          thumbnail: { uri: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
          cover: { uri: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
          description:
            "Pão de fermentação natural fresco coberto com abacate amassado, tomates cereja e uma pitada de sal marinho.",
          ingredients: [
            "Pão de Fermentação Natural", "Abacate", "Tomates Cereja", "Sal Marinho"
          ],
        },
      ],
    },
  ];
  
  module.exports = { MENU };
  