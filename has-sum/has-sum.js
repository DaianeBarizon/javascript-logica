/*

[8691] desordenado e aleatório
[1689] ordenado e aleatório
[1432] desordenado e sequencial
[1234] ordenado e sequencial

Ver se existe dois elementos no array que somam determinado valor passado

*/


function arrRandom(size, max) {
  let newArr = new Array(size)

  for(let i = 0; i < size; i++){
    const random = Math.floor(Math.random() * max)
    newArr[i] = random
  }

  return newArr
}

/* gasta menos memoria, mas menos performático em tempo */
function hasSumDoubleFor(sum) {
  const resultArr = arrRandom(4, 10)

  for(let i = 0; i < resultArr.length; i++){
    for(let j = 0; j < resultArr.length; j++){
      if(i !== j && resultArr[i] + resultArr[j] == sum){
        console.log(resultArr[i], resultArr[j])
        return true
      }
    }
  }

  return false
}


/* melhor velocidade mais gasta mais memoria */
function hasSumSingleForMap(sum) {
  const resultArr = arrRandom(4, 10)

  let map = new Map()

  for(let i = 0; i < resultArr.length; i++){
    if(map.has(sum - resultArr[i])) {
      return true
    }

    map.set(resultArr[i], true)
  }

  return false
}

console.log(hasSumSingleForMap(8))


