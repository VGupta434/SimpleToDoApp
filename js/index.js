const inputElement = document.querySelector("input");
const addButton = document.querySelector("button");
addButton.addEventListener("click", addToDo);
// deleteButtons = document.querySelectorAll("[class*='deleteButton-']");
// deleteButtons.forEach((deleteButton) => { 
//     console.log("class name: " +deleteButton.className);
//     deleteButton.addEventListener("click", () =>{deleteToDo(deleteButton.className.charAt(deleteButton.className.length-1))}); 
// });

deleteButtons = document.querySelectorAll(".deleteButton");
deleteButtons.forEach((deleteButton) => { 
    console.log("added listener")
    deleteButton.addEventListener("click", () =>{deleteToDo(deleteButton)});
    
});



function addToDo()
{
    console.log(inputElement.value);
    if(inputElement.value == "")
    {
        console.log("empty input");
    }
    else
    {
        let taskDiv = document.createElement("div");
        taskDiv.setAttribute("class", "task")
        let taskH4 = document.createElement("h4");
        taskH4.innerHTML = inputElement.value;
        let taskDeleteButton = document.createElement("button");
        taskDeleteButton.innerHTML = "delete";
        taskDeleteButton.setAttribute("class", "deleteButton")
        taskDiv.appendChild(taskH4);
        taskDiv.appendChild(taskDeleteButton);
        let todoListDiv = document.querySelector(".taskList");
        todoListDiv.appendChild(taskDiv);
        taskDeleteButton.addEventListener("click", () => {deleteToDo(taskDeleteButton)});
    }
    
}

// function deleteToDo(i)
// {
//     console.log("ToDo Deleted " +i);
//     let delBtn = document.querySelector(".deleteButton-"+i);
//     console.log(delBtn);
//     let parentDiv = delBtn.parentNode;
//     console.log(parentDiv);
//     parentDiv.remove();
// }

function deleteToDo(delBtn)
{
    console.log("called delete method")
    let parentDiv = delBtn.parentNode;
    console.log(parentDiv);
    parentDiv.remove();
}