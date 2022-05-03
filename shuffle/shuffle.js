/* dado um array de inteiro na ordem, deve embaralhar o array */

function shuffle(arr) {
  for(let i = 0; i < arr.length; i++) {
    const random = Math.floor(Math.random() * (arr.length - 0))
  
    const aux = arr[i]
    arr[i] = arr[random]
    arr[random] = aux 
  }

  return arr
}

function calculateDistribution() {

  let map = new Map()

  for(let i = 0; i < 10000; i++){
    const arr = [2, 3, 4]
    const resultArr = shuffle(arr)

   if(map.has(String(resultArr))){
    map.set(String(resultArr), map.get(String(resultArr)) + 1)
   } else{
    map.set(String(resultArr), 1)
   }
  }

  console.log(map)
}

calculateDistribution()


