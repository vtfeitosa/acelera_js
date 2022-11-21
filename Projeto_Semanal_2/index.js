"use strict"

let tasks = [
    "estudar", "lavar louça", "dormir"
];

function addTask(){
    let task = document.querySelector("#task");
    
    if(task.value === ""){
        return 

    }else{
        tasks.push(task.value);
        console.log(tasks);
        showTasks();
        task.value = "";
    }
}

function showTasks(){
    let tasksList = document.querySelector("#tasksList");

    tasksList.innerHTML = "";

    for(let taskNum = 0; taskNum< tasks.length; taskNum++){
        tasksList.innerHTML += `
        <li> ${tasks[taskNum]}
        <button onclick="deletar(${taskNum})">Excluir</button>
        </li>
        `
    }
}

function deletar(taskNum){
    console.log("deletando");
    tasks.splice(taskNum , 1);

    showTasks();
}

showTasks();