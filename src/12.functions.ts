(()=>{

  type Sizes = 'S' | 'M' | 'L';

  function createProductToJson(
    title:string,
    createdAt:Date,
    stock: number | undefined,
    size: Sizes
  ){
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product = createProductToJson('p1', new Date(), undefined, 'L')

  const createProductToJsonv2 =(
    title:string,
    createdAt:Date,
    stock: number,
    size?: Sizes
  )=>{
    return {
      title,
      createdAt,
      stock,
      size
    }
  }
  const product2 = createProductToJson('p1', new Date(), 123)

})()
