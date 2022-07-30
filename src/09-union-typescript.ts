(()=>{
  // let myDynamicVar: string | number;
  // myDynamicVar = 'hola';
  // myDynamicVar = 123;

  function greeting(myText: string | number){
    if(typeof myText === 'string'){
      console.log(`string ${myText.toLocaleLowerCase()}`)
    } else if (typeof myText ==='number'){
      console.log(`number ${myText.toFixed(2)}`)
    }
  }
  greeting('hola')
  greeting(12.1231231)
})()
