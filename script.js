let result = 0
let answer = 0
let diameter = 0
// The "let" variable is where users enter their specific numbers and where the results and answers are shown

document.getElementById('button').addEventListener('click', multiplication)
document.getElementById('Area').addEventListener('click', calculate)
// This lines tells the code what to calculate

function multiplication () {
  diameter = document.getElementById('diameter').value 

  diameter = parseInt(diameter)

  result = 3.14 * diameter

  result = parseInt(result)
  
  document.getElementById('result').innerHTML = result
}
 function calculate () {
   diameter = document.getElementById('diameter').value
   
   diameter = parseInt(diameter)
  
   answer = 3.14 *(diameter/2 *diameter/2)

   answer = parseInt(answer)
   
   document.getElementById('answer').innerHTML = answer
  }
}
