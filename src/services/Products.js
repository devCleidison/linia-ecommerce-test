const Products = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1548864789-7393f2b4baa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80',
    price: 64.90,
    seller: 'Logic Store',
    name: 'Camiseta Good Things',
    discount: true
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1548864789-7393f2b4baa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80',
    price: 64.90,
    seller: 'Logic Store',
    name: 'Camiseta Good Things',
    discount: false
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1548864789-7393f2b4baa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80',
    price: 64.90,
    seller: 'Logic Store',
    name: 'Camiseta Good Things',
    discount: false
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1548864789-7393f2b4baa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80',
    price: 64.90,
    seller: 'Logic Store',
    name: 'Camiseta Good Things',
    discount: true
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1548864789-7393f2b4baa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80',
    price: 64.90,
    seller: 'Logic Store',
    name: 'Camiseta Good Things',
    discount: false
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1548864789-7393f2b4baa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80',
    price: 64.90,
    seller: 'Logic Store',
    name: 'Camiseta Good Things',
    discount: false
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1548864789-7393f2b4baa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80',
    price: 64.90,
    seller: 'Logic Store',
    name: 'Camiseta Good Things',
    discount: false
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1548864789-7393f2b4baa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80',
    price: 64.90,
    seller: 'Logic Store',
    name: 'Camiseta Good Things',
    discount: false
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1548864789-7393f2b4baa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80',
    price: 64.90,
    seller: 'Logic Store',
    name: 'Camiseta Good Things',
    discount: false
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1548864789-7393f2b4baa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80',
    price: 64.90,
    seller: 'Logic Store',
    name: 'Camiseta Good Things',
    discount: false
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1548864789-7393f2b4baa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80',
    price: 64.90,
    seller: 'Logic Store',
    name: 'Camiseta Good Things',
    discount: true
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1548864789-7393f2b4baa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80',
    price: 64.90,
    seller: 'Logic Store',
    name: 'Camiseta Good Things',
    discount: false
  },
  {
    id: 13,
    image: 'https://images.unsplash.com/photo-1548864789-7393f2b4baa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80',
    price: 64.90,
    seller: 'Logic Store',
    name: 'Camiseta Good Things',
    discount: true
  },
  {
    id: 14,
    image: 'https://images.unsplash.com/photo-1548864789-7393f2b4baa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80',
    price: 64.90,
    seller: 'Logic Store',
    name: 'Camiseta Good Things',
    discount: false
  },
  {
    id: 15,
    image: 'https://images.unsplash.com/photo-1548864789-7393f2b4baa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80',
    price: 64.90,
    seller: 'Logic Store',
    name: 'Camiseta Good Things',
    discount: false
  }
]

export default Products