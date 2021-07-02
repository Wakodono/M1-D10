/* JS EXERCISES

21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
22) Create an object with properties such name, surname, email
23) Delete Email from the previously created object
24) Create an array with 10 strings in it
25) Print in the console every string in the previous array
26) Create an array with 100 random numbers in it
27) Write a function to get the MAX and the MIN from the previously created array
28) Create an array of arrays, in which every array has 10 random numbers
29) Create a function that gets 2 arrays and returns the longest one
30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
*/



concatinatedName("John", "Doe")

const personObject{
    name: "Monkey D",
    surname: "Luffy",
    email: mugiwaracaptain@outlook.com,
}

delete personObject.email
console.log(personObject)

const heroRankings = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
console.log(heroRankings)

Array.from({length: 100}, () => Math.floor(Math.random() * 100));
console.log(Array)

const getExtremes = function(Array){
let smallest = max(Array)
let largest = min(Array)
return smallest
return largest
}

getExtremes(Array)

arrayOfArrays = [
    [first.from(length: 10} () => Math.floor(Math.random() *10)),
    second.from(length: 10} () => Math.floor(Math.random() *10)),
    third.from(length: 10} () => Math.floor(Math.random() *10)),
    fourth.from(length: 10} () => Math.floor(Math.random() *10))
    ]
]

/* DOM 

        31) Get element with ID "container" from the page
        32) Get every "td" from the page
        33) Create a cycle that prints the text inside every td of the page
        34) Write a function to change the heading of the page
        35) Write a function to add an extra row to the table
        36) Write a function to add the class "test" to each row in the table
        37) Write a function to add a red background to every link in the page
        38) Console log "Page loaded" when the page is correctly loaded
        39) Write a function to add new items to a UL
        40) Write a function to empty a list */

// Get element with ID "container" from the page

// Get every "td" from the page

getTableContents = document.getElementsByTagName("td")

// Create a cycle that prints the text inside every td of the page

