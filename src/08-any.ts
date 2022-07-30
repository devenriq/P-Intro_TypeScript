(()=>{
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = true;
  myDynamicVar = 'hola';
  myDynamicVar = {}
  myDynamicVar = []

  let rta = (myDynamicVar as string).toLocaleLowerCase()

})()
