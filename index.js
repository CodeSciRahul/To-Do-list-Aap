let btn = document.querySelector("button");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    let list = document.querySelector(".list");
    let input = document.querySelector("input").value;

     if(input=="") alert("enter task");
    else{
        let div = document.createElement("div");
    let newchild = list.appendChild(div);
    newchild.className = "iteam";
    newchild.innerText = input;
    let key=0;
    localStorage.setItem("key",newchild.innerText);
    key++;
    let icon = document.createElement("i");
    icon.className = "fa-solid fa-circle-xmark";
    let button = document.createElement("button");

    let newbtn = newchild.appendChild(button);
    newbtn.appendChild(icon);
    icon.id = "ic";

    document.querySelector("input").value = "";

    button.addEventListener("click", (event) => {
        document.querySelector(".iteam").parentNode.removeChild(document.querySelector(".iteam"))

        let myTodoList = document.querySelectorAll('.item');


    })
    
}
})