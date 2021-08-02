// JS EXERCISES

// 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"

const x = 'John'
const y = 'Doe'
console.log(`${x} <> ${y}`)

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
for (let string of stringsArr){
    console.log(string)

}

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

// 28) Create an array of 10 arrays filled with random numbers
let arrayOfArrays = []

for (let i = 0; i < 10; i++) {
    let nestedArr = []

    for (let j = 0; j < 10; j++) {
        nestedArr.push() = Math.floor(Math.random() * 10);
    }
    arrayOfArrays.push(nestedArr)
}
console.log(arrayOfArrays)

//29) Create a function that gets 2 arrays and returns the longest one
function longestOne (arr1, arr2) {
    if (arr1.length > arr2.length) {
        return arr1
    } else {
        return arr2
    }
}

//30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
function highestSumArr(arr1, arr2) {
    let sum1 = 0;

        for (let number of arr1) {
          sum1 += number;
        }

        let sum2 = 0;

        for (let number of arr2) {
          sum2 += number;
        }

        return sum1 >= sum2 ? sum1 : sum2;
      }
}

// DOM EXERCISES

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
window.onload = (e) => {
    console.log('Page loaded');
  };

// 39) Write a function to add new items to a UL
function addLi () {
    const ul = document.querySelector('ul')
    li = document.createElement('li')
    li.innerText = "I'm a new list item mayne"
    ul.appendChild(li)
}

// 40) Write a function to empty a list

const emptyList = function () {
    const ul = document.querySelector("ul");
    ul.innerHTML = "";
  };

  // EXTRAS

//  41) Add an eventListener to alert when the mouse is over a link, displaying the URL

      const alertUrl = function () {
        const links = document.querySelectorAll("a");
        links.forEach((link) => {
          link.onmouseenter = function (e) {
            alert(e.target.href);
          };
        });
      };

 // 43) Add a button to hide and show the table from the page
      const toggleTable = function () {
        const btn = document.createElement("button");
        btn.innerText = "Toggle table";
        btn.onclick = function () {
          const table = document.querySelector("table");
          table.classList.toggle("d-none");
        };

        const body = document.querySelector("body");
        body.appendChild(btn);
      };

// 48) Add a pink border to a cell when the mouse is over it
const addPinkBorder = function () {
    const cells = document.querySelectorAll("td");
    cells.forEach((td) => {
      td.onmouseenter = function (e) {
        e.target.classList.add("border-pink");
      };
      td.onmouseleave = function (e) {
        e.target.classList.remove("border-pink");
      };
    });
  };

  // 49) Write a function to add a table with 4 rows and 3 columns programmatically

  const createTable = function () {
    const body = document.querySelector("body");
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    body.appendChild(table);
    for (let i = 0; i < 5; i++) {
      const tr = document.createElement("tr");
      tbody.appendChild(tr);
      for (let j = 0; j < 3; j++) {
        if (i === 0) {
          const th = document.createElement("th");
          th.innerText = "Heading " + (j + 1);
          tr.appendChild(th);
        } else {
          const td = document.createElement("td");
          td.innerText = `Row ${i} Col ${j + 1}`;
          tr.appendChild(td);
        }
      }
    }
  };

  // 50) Write a function to remove the table from the page
  const removeTable = function () {
    const table = document.querySelectorAll("table")[1];
    table.remove();
  };