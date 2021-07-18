
// 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"

const x = 'John'
const y = 'Doe'
console.log(`${x} <> ${y}`)

/* JS EXERCISES
29) Create a function that gets 2 arrays and returns the longest one
30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
*/

// 22) Create an object with properties such name, surname, email
const person = {
    name: 'Naruto',
    surname: 'Uzumaki',
    email: 'konohahokage@gmail.com',
} 

// 23) Delete Email from the previously created object

delete person.email

// 24) Create an array with 10 strings in it
const stringsArr = []

for (let i = 1; i <= 10; i++) {
    stringsArr.push("string-" + i)
}

// 25) Print in the console every string in the previous array
console.log(stringsArr)

// 26) Create an array with 100 random numbers in it
const randomNumArr = []

for (let i = 0; i < 100; i++) {
    randomNumArr.push(Math.floor(Math.random() *100))
}

// 27) Write a function to get the MAX and the MIN from the previously created array
function findMinAndMax(arr) {

    console.log("FOR THE FUNCTION", arr)
    
    let min = arr[0]
    let max = arr[0]
    
    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i]
        
        if (currNum < min) {
            min = currNum
        }

        if (currNum > max) {
            max = currNum
        }
    }
    
    console.log("MIN VALUE IS", min)
    console.log("MAX VALUE IS", max)
}

findMinAndMax(randomNumArr)




// 31) Get element with ID "container" from the page
function container (){
    console.log(document.querySelector("container"))
}

// 32) Get every "td" from the page

const getTableContents = document.getElementsByTagName("td")

// 33) Create a cycle that prints the text inside every td of the page

for (let i = 0; i < getTableContents.length; i++) {
    console.log(getTableContents[i].innerText)
    
}

// 34) Write a function to change the heading of the page
function changeH1(string){
    const pageHeading = getElementsByTagName("h1")[0]
    pageHeading.innerHTML = string
    
}

// 35) Write a function to add an extra row to the table

HTMLTableElement.insertRow()

// 36) Write a function to add the class "test" to each row in the table

const tableRows = querySelectorAll("tr")
tableRows.className += "test"

// 37) Write a function to add a red background to every link in the page

const redLink = querySelectorAll("a").style.backgroundColor = "red"

// 38) Console log "Page loaded" when the page is correctly loaded
window.onload = function () {
    console.log("PAGE LOADED")

// 39) Write a function to add new items to a UL


// 40) Write a function to empty a list
function emptyUlList() {
    const ulList = document.querySelector("#container ul")

    ulList.innerHTML = ""

}


// DOM 
