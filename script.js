class Tiger {
    constructor(name) {
        this.name = name
    }
}

const tiger = new Tiger("Tiger");

let student1 = {
    name: "John",
    age: 20,
    address: {
        district:"Bangkhen",
        street:"Lahpao",
        zip:"10010",
        city:"BNK"
    },
    parentName:["Somchai","Sombai"],
}

let student2 = {
    name:"Deen",
    age:"21"
}


function changeTitleeeColor() {
    const titleee = document.getElementById("titleee")

    if(titleee.classList.contains("hidden")) {
        titleee.classList.remove("hidden")
    }else{
        titleee.classList.add("hidden")
    }
}

function sum() {
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)

    let result = document.getElementById("result")

    result.innerHTML = num1 + num2
}

console.log(document.getElementById("textInput").value)

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", addContent);

function addContent(){
    console.log("GGG")
    const text = document.getElementById("textInput").value
    const result = document.getElementById("result") 
    result.innerHTML += text
}


     async function fetchData() {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos')
        const json = await data.json()
        const titleList = document.getElementById("titleList")
        console.log(json.length)
        for(let i=0; i<json.length; i++){
            titleList.innerHTML += `<h3>${json[i].title}</h3>`
        }
      }
      fetchData()