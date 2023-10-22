let inputElement = document.getElementById("input-box");
let listElement = document.getElementById("list-container");

function addTask(){
    if(inputElement.value === ''){
        alert("You Must Write Something")
    }
    else{
        let listItem = document.createElement("li");
        listItem.innerHTML = inputElement.value;
        listElement.appendChild(listItem);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        listItem.appendChild(span);
    }
    inputElement.value = '';
    saveTask();
}

listElement.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
}, false);

function saveTask(){
    localStorage.setItem("data", listElement.innerHTML);
}

function show(){
    listElement.innerHTML = localStorage.getItem("data");
}
show();

















