(()=>{
  let productTitle = 'My amazing Product'
  productTitle = 'My amazing product changed'
  console.log('productTitle', productTitle)

  const productDescription = 'blablablabla'
  console.log('ProductDescription', productDescription)

  const summary = `
  title:${productTitle},
  description:${productDescription}
  `
  console.log(summary)
})();
