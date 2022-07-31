import _ from 'lodash'

const data = [
  {
    username: 'nico',
    role: 'admin',
  },
  {
    username: 'enrique',
    role:  'user'
  },
  {
    username: 'Diana',
    role:  'user'
  },
  {
    username: 'balta',
    role:  'vendedor'
  }
]

const rta = _.groupBy(data, (item)=>{item.username})
console.log(rta)
