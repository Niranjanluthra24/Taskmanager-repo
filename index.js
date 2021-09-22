const taskContainer = document.querySelector(".task__container");
const generateNewCard = (taskData) =>  `
<div class="col-md-6 col-lg-6" id=${taskData.id}>
   <div class="card">
     <div class="card-header d-flex justify-content-end gap-2">
       <button type="button" class="btn btn-outline-success ">
         <i class="fas fa-pencil-alt"></i>
       </button>
        <button type="button" class="btn btn-outline-danger">
         <i class="fas fa-trash-alt"></i>
         </button>
     </div>
     <img src=${taskData.imageUrl} class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${taskData.taskTittle}</h5>
       <p class="card-text">${taskData.taskDescription}</p>
       <a href="#" class="btn btn-primary">${taskData.taskType}</a>
     </div>
     <div class="card-footer">
       <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
     </div>
   </div>
`;
const loadInitialCardData = () =>{
  //localstorage to get Unique card data
   const getCardData = localStorage.getItem("Unique");
  
   // convert to normal object
    const {card} =JSON.parse(getCardData);
  
  //loop over those array of task object to create html card ,insert it to DOM
   card.map((cardObject) =>{
    taskContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObject));
     //update our globalStore
    globalStore.push(cardObject);
   }
   )

 
};
const globalStore = [];
const saveChanges = () => {
    const taskData = {
      id: `${Date.now()}`,
      imageUrl: document.getElementById("imageurl").value,
      taskTittle: document.getElementById("tasktitle").value,
      taskType: document.getElementById("tasktype").value,
      taskDescription: document.getElementById("taskdescription").value,
    };
  taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));
  globalStore.push(taskData);
  localStorage.setItem("Unique", JSON.stringify({card:globalStore}));
   };