//Translator from English to Whale Talk

//sample text with vowels

const input = 'This is sample text and you must be unique'

const vowels = ['a', 'e', 'i', 'o', 'u'] //whales only use vowels


let resultArray = [] //let function because the input while change 

//iterating over input variable text

for(i = 0; i < input.length; i++){                  //test: console.log('i is ' + i)
  for(j = 0; j < vowels.length; j++){
    if(input[i] === vowels[j]){                     //test: console.log(input[i])
      resultArray.push(input[i])
      if(input[i] === 'e'){                         //double the e's and u's below
    resultArray.push(input[i])
      }
      if(input[i] === 'u'){
    resultArray.push(input[i])
      }
    }
  }
}

//combines array elements into a string and puts the string in all UpperCase

const resultString = resultArray.join('').toUpperCase()

//print whale talk

console.log(resultString)

