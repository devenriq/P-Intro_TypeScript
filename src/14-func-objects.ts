(()=>{


  const login = (data: {email:string, password:string})=>{
    console.log(data.email, data.password)
  }

  // login('admin@mail.com', "hola");
  login(
    {
      email: "hola@",
      password: "hola"
    }
    );

  type Sizes = 'S' | 'M' | 'L';

  const products: any[] = []

  const addProduct = (data:{
    title:string,
    createAt: Date,
    stock: number,
    size?: Sizes
  })=>{
    products.push(data)
  }

  addProduct({
    title: 'shampoo',
    createAt: new Date(1999,2,3),
    stock: 12,
    size: "L"
  })
  console.log(products)
})()
