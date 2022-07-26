(()=>{
  let productPrice = undefined;
  productPrice = 12;
  console.log('productPrice', productPrice)

  let customerAge: number = 20;
  customerAge = customerAge + 1
  console.log(customerAge)

  let discount = parseInt('123');
  console.log('discount', discount)
  if(discount <=200){
    console.log('apply')
  }else{
    console.log('not apply')
  }

  let hex = 0xfff
  console.log(hex)
  let bin = 0b101010
  console.log(bin)


})()
