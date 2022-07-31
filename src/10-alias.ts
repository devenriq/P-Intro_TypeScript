(()=>{
  type UserId = string | number

  let userId: UserId

  type Sizes = 'S' | 'M' | 'L';
  let shirtSize: Sizes;
  shirtSize='S'
  shirtSize='M'
  shirtSize='L'

  function greetin(userId: UserId , size: Sizes){
    if(typeof userId ==='string'){
      console.log(`string ${userId.toLocaleLowerCase()}`)
    }
  }

  greetin('L', 'M')

})()
