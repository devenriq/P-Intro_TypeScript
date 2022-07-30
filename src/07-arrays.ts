(()=>{
  const prices = [1,2,3,4,5,6,7];
  prices.push(123)
  // prices = [1,2,3]

  let products = [1,2,3,4,5,6, "HOLA"]

  let mixed: (number | string | boolean | Object)[]=[123, "hola como estas", false]
  mixed.push([])
  mixed.push({})

  const numbers= [1,2,3,4,5,6,7];
  numbers.map(item=> item * 2)

})()


