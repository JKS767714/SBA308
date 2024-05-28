// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.



// let csv = "ID, Name, Occupation, Age\n42,Bruce, Knight, 41\n57, Bob, Fry cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"

// let cellA = ""
// let cellB = ""
// let cellC = ""
// let cellD = ""

 let data = ""
csv.forEach(() => {
    if(csv[c] != "\n"){        data += csv[c]
    }

   console.log(data)

})

// ----let csv = "ID, Name, Occupation, Age\n42,Bruce, Knight, 41\n57, Bob, Fry cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"

//---- let newcsv = csv.split('\n')

//------ console.log(newcsv)
//Part 2
// For example, if the first row of data (the headings) has eight entries, your program should create eight entries per row. You can safely assume that all rows that follow will contain the same number of entries per row.
// After you have implemented the above:
// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.
// Using the original CSV example data, here is what the result of this step should look like:
// ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
// becomes
// [["ID", "Name", "Occupation", "Age"],
//  ["42", "Bruce", "Knight", "41"],
//  ["57", "Bob", "Fry Cook", "19"],
//  ["63", "Blaine", "Quiz Master", "58"],
//  ["98", "Bill", "Doctor’s Assistant", "26"]]

// step 1 create 8 entries per row
//data type is string

let csv = "ID, Name, Occupation, Age\n42,Bruce, Knight, 41\n57, Bob, Fry cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"
let header = []
let data = []
for(let i = 0; i < csv.length; i++){
    if(csv[i] == '\n') break
}



// let row = [];
// let cell = '';
// let cellIndex = 0;
// let rowIndex = 0;
// let columns = 0;
// const result = [];

// // Determine the number of columns from the first row
for (let i = 0; i < csv.length; i++) {
  if (csv[i] === ',' || csv[i] === '\n') {
    columns++;
    if (csv[i] === '\n') break;
  }


  for(let i=0; i < csv.length; i++){
      if(csv[i] == ','){
          row.push(cell.trim());
          cell = '';
          cellIndex++  
      }
      console.log(cell)
      
  }
  
///=======
//console.log(csv)
// let words = csv.split(' ')

// function Delete(i){
//     if (str[i] == "\n"){
//         delete
//     }

// }

// console.log(words)

// words.remove()

// words.forEach((word) => {

//     words.delete("\n")
//     console.log(words)

// })


let words = csv.split('')

words.forEach((word) => {
    console.log(word)
}) 




for( let c of csv){
    if (c !== "\n"){
        delete(c)
        parent.push(c)

    }
    console.log(parent)

// }




//part 3 Transforming Data 






const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";


// Initialize variables
let row = [];
let cell = '';
let cellIndex = 0;
let rowIndex = 0;
let columns = 0;
const result = [];

// Determine the number of columns from the first row

for(let i = 0; i < csv.length; i++){
    if (csv[i] === ','){
        columns++
        if(csv[i] == '\n') break;
    }
    
}

for (let i = 0; i < csv.length; i++){
    let char = csv[i]
    
    if (char == ','){
        row.push(cell.trim());
        cell = ''
        cellIndex = 0
        
    }

    if (char == '\n'){
        row.push(cell.trim())
        result.push(row)
        console.log(result)
    }
}
//part 3
// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

let newData = {}