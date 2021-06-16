let list = document.getElementById("list");
let task = document.getElementById("task");
let close=document.querySelectorAll(".close");
let addBtn=document.getElementById("liveToastBtn");


addBtn.addEventListener("click",function(){
    
    if(!task.value.trim()){
        let error=document.querySelector(".error")
        error.classList.remove("hide");
        error.classList.add("show")
        setTimeout(()=>error.classList.remove("show"),500)   
    }else{
        let success=document.querySelector(".success");
        success.classList.remove("hide");
        success.classList.add("show");
        setTimeout(()=>success.classList.remove("show"),500)
        task.value=""
    }
})


close.forEach(item=>item.addEventListener("click",function(){
    this.closest("li").classList.add("hidee")
}))


function newElement() {
   if(task.value.trim()){ 
  var todo = document.createElement("li");
  todo.innerHTML = task.value;

  var closeBtn = document.createElement("span");

  closeBtn.classList.add("close");
  closeBtn.innerHTML = "×";
  todo.appendChild(closeBtn);

  closeBtn.onclick = function () {
    this.closest("li").classList.add("hidee");
  };

  list.appendChild(todo);
}
}

