/* O número de vezes que Maria quebrou seus melhores e piores recordes ao longo da temporada */
/* https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem */

function breakingRecords(scores) {
  // Write your code here
 
 let maxValue = scores[0]
 let minValue = scores[0]
 let countMaxScores = 0
 let countMinScores = 0
 
  for(let i = 1; i < scores.length; i++){
      console.log("a[" + i + "] = " + scores[i])
      
      if(scores[i] > maxValue){
          maxValue = scores[i]
          countMaxScores++
      }
      
      if(scores[i] < minValue){
          minValue = scores[i]
          countMinScores++
      }
  }
  
  return [countMaxScores, countMinScores]
}

breakingRecords([
  10, 5, 20, 20, 4,
   5, 2, 25,  1
])

breakingRecords([
  3,  4, 21, 36, 10,
 28, 35,  5, 24, 42
])