const userInput = document.getElementById("userInput");
const addedTasks = document.getElementById("addedTasks");

function createTask() {
    if(userInput.value === ''){
        alert("Can't Add An Empty List\nPlease Click Ok And Try Again")
    } 
    else {
        let li = document.createElement("li");
        li.innerHTML = userInput.value;
        addedTasks.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    userInput.value = "";
    saveData();
}

addedTasks.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);

function saveData() {
    localStorage.setItem("data", addedTasks.innerHtml)
}

showList()