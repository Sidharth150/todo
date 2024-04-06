let todolist =[ {
    item : 'bye ciggrate',
    dueDate : '04/04/2024'
},
{
    item : 'bye milk' ,
    dueDate:'04/04/2024'
}]
displayItems ();

function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
   
    let todoItem =inputElement.value;

    let tododate =dateElement.value;
    todolist.push( { item : todoItem ,dueDate: tododate});
inputElement.value = '';
dateElement.value ='';


 displayItems ();
}


function displayItems () {

    let containerElement = document.querySelector ('.todo-container');

    let newHtml ='';
    // let displayElement =document.querySelector('#todo-items');
   // displayElement.innerText = '';

    for (let i =0 ; i< todolist.length; i++){
        

        // let item = todolist[i].item;
        // let dueDate = todolist [i].dueDate;

       let {item, dueDate} =todolist[i];

        newHtml += `
    
        
             <span> ${item}</span>
             <span> ${dueDate}</span>

            <button class="button-delete" onclick="todolist.splice(${i},1);
            displayItems();"> Delete</button>
        
        `;
        
        
        // displayElement.innerText = displayElement.innerText +  "\n"  + todolist[i];
    }

     containerElement.innerHTML = newHtml ;
}