const extraCategories = [
  {
    id: "cat-carnes",
    title: "Carnes",
    items: [
      {
        id: "rn1",
        title: "Ribeye Steak",
        price: "$85.000",
        description:
          "Corte grueso a la parrilla con hierbas frescas y mantequilla.",
        kcal: 800,
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "rn2",
        title: "BBQ Ribs",
        price: "$65.000",
        description: "Costillas ahumadas bañadas en salsa barbecue artesanal.",
        kcal: 950,
        image:
          "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "rn3",
        title: "Filet Mignon",
        price: "$95.000",
        description:
          "El corte más tierno, sellado a la perfección con reducción de vino.",
        kcal: 700,
        image:
          "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "rn4",
        title: "T-Bone Steak",
        price: "$90.000",
        description: "Corte clásico de hueso con doble textura de carne.",
        kcal: 850,
        image:
          "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "cat-verduras",
    title: "Verduras",
    items: [
      {
        id: "vg1",
        title: "Veggie Bowl",
        price: "$25.000",
        description:
          "Bowl nutritivo con quinoa, aguacate, zanahoria y aderezo tahini.",
        kcal: 320,
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "vg2",
        title: "Espárragos a la Parrilla",
        price: "$18.000",
        description:
          "Espárragos frescos asados con aceite de oliva y parmesano.",
        kcal: 150,
        image:
          "https://images.unsplash.com/photo-1515516969-d4008cc6241a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "vg3",
        title: "Ensalada de Espinacas",
        price: "$22.000",
        description: "Espinacas baby con fresas, nueces y vinagreta balsámica.",
        kcal: 210,
        image:
          "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "vg4",
        title: "Berenjena Asada",
        price: "$20.000",
        description:
          "Berenjena al horno con miel, sésamo y hierbas mediterráneas.",
        kcal: 280,
        image:
          "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "cat-postres",
    title: "Postres",
    items: [
      {
        id: "ps1",
        title: "Tiramisú",
        price: "$18.000",
        description: "Capas de bizcocho, mascarpone y café espresso con cacao.",
        kcal: 450,
        image:
          "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "ps2",
        title: "Pastel de Chocolate",
        price: "$16.000",
        description: "Bizcocho húmedo de chocolate oscuro con ganache cremoso.",
        kcal: 550,
        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "ps3",
        title: "Cheesecake de Fresa",
        price: "$17.000",
        description:
          "Cheesecake cremoso con coulis de fresa y base de galleta.",
        kcal: 480,
        image:
          "https://images.unsplash.com/photo-1567171466295-4afa63d45416?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "ps4",
        title: "Helado Sundae",
        price: "$14.000",
        description:
          "Tres bolas de helado artesanal con sirope, crema y cereza.",
        kcal: 380,
        image:
          "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "cat-sopas",
    title: "Sopas",
    items: [
      {
        id: "sp1",
        title: "Sopa de Tomate",
        price: "$15.000",
        description:
          "Crema suave de tomate rostizado con albahaca y croutones.",
        kcal: 200,
        image:
          "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "sp2",
        title: "Sopa de Pollo",
        price: "$18.000",
        description: "Caldo casero de pollo con vegetales frescos y fideos.",
        kcal: 250,
        image:
          "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "sp3",
        title: "Minestrone",
        price: "$17.000",
        description: "Sopa italiana de verduras con pasta y frijoles blancos.",
        kcal: 220,
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "sp4",
        title: "Sopa de Cebolla Francesa",
        price: "$20.000",
        description:
          "Cebolla caramelizada con caldo de res y gratinado de queso gruyère.",
        kcal: 300,
        image:
          "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "cat-hamburguesas",
    title: "Hamburguesas",
    items: [
      {
        id: "hb1",
        title: "Hamburguesa Clásica",
        price: "$28.000",
        description:
          "Carne angus, lechuga, tomate, cebolla y salsa especial de la casa.",
        kcal: 700,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "hb2",
        title: "Hamburguesa Doble",
        price: "$35.000",
        description:
          "Doble carne con queso cheddar fundido y pepinillos crujientes.",
        kcal: 950,
        image:
          "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "hb3",
        title: "Hamburguesa BBQ Bacon",
        price: "$32.000",
        description:
          "Tocineta crocante, aros de cebolla y salsa barbecue ahumada.",
        kcal: 850,
        image:
          "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "hb4",
        title: "Hamburguesa Vegetariana",
        price: "$26.000",
        description: "Portobello asado con queso de cabra, rúgula y pesto.",
        kcal: 500,
        image:
          "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "cat-pizzas",
    title: "Pizzas",
    items: [
      {
        id: "pz1",
        title: "Pizza Margarita",
        price: "$32.000",
        description:
          "Masa artesanal, salsa de tomate San Marzano y mozzarella fresca.",
        kcal: 600,
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "pz2",
        title: "Pizza Pepperoni",
        price: "$35.000",
        description:
          "Pepperoni crujiente con queso mozzarella derretido y orégano.",
        kcal: 750,
        image:
          "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "pz3",
        title: "Pizza Cuatro Quesos",
        price: "$38.000",
        description:
          "Gorgonzola, parmesano, mozzarella y provolone sobre masa crujiente.",
        kcal: 800,
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "pz4",
        title: "Pizza Hawaiana",
        price: "$34.000",
        description: "Jamón ahumado con piña caramelizada y queso fundido.",
        kcal: 680,
        image:
          "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "cat-bebidas",
    title: "Bebidas",
    items: [
      {
        id: "bd1",
        title: "Jugo Natural",
        price: "$8.000",
        description:
          "Mezcla fresca de naranja, zanahoria y jengibre recién exprimido.",
        kcal: 120,
        image:
          "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "bd2",
        title: "Limonada de Coco",
        price: "$10.000",
        description: "Limonada refrescante con leche de coco y hierbabuena.",
        kcal: 180,
        image:
          "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "bd3",
        title: "Té Helado",
        price: "$7.000",
        description: "Té negro con durazno, hielo y un toque de miel natural.",
        kcal: 90,
        image:
          "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "bd4",
        title: "Cerveza Artesanal",
        price: "$12.000",
        description: "IPA local con notas cítricas y amargor equilibrado.",
        kcal: 220,
        image:
          "https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
];

export default extraCategories;
