import { addProduct,calcStock, products } from "./product.service";

addProduct({
  title: 'calculadora',
  createdAt: new Date(1332, 12,3),
  stock: 5
})

addProduct({
  title: 'parlante',
  createdAt: new Date(1332, 12,2),
  stock: 5,
  size: 'XL'
})

console.log(calcStock( ))
