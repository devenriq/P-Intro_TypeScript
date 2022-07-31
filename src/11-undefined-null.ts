(()=>{

  // let myNumber: number;
  // let myName: string;

  let myNull:null = null;
  let myUndefined = undefined;

  let myString: string | undefined = undefined;
  myString= "hola"

  function hi(name:string|null) {
    let hello = 'hola,'

    if (hello) {
      hello+='name'
    } else {
      hello += 'nobody'
    }
    console.log(hello)
  }

  function hi2(name: string | null){
    let hello = 'hola'
    hello += name?.toLocaleLowerCase()||'nobody';
    console.log(hello)
  }

  hi('Enrique')
  hi(null)

  hi('Octavio')
  hi(null)

})()
