/* Uma operação de rotação à esquerda em uma matriz de tamanho desloca cada um dos elementos do
array unidade à esquerda. Dado um inteiro,, gire a matriz muitas etapas restantes e retorne o
resultado.

Exemplo:
d=2
arr=[1,2,3,4,5]
Depois 2 rotações esquerda

*/
/* https://www.hackerrank.com/challenges/three-month-preparation-kit-array-left-rotation/problem?h_r=internal-search */


function rotateLeft(d, arr) {
  // Write your code here

  const rotation = d % arr.length
  const newArr = []
  
  for(let i = rotation; i < arr.length; i++){
      newArr.push(arr[i])    
  }
  
  for(let i = 0; i < rotation; i++){
      newArr.push(arr[i])
  }
  
  return newArr
}

rotateLeft(4, [ 1, 2, 3, 4, 5 ])