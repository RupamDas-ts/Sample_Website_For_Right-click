const card = document.querySelector(".card");
const customContextMenu = document.querySelector(".custom-context-menu");

document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    let topPosition = event.clientY;
    let leftPosition = event.clientX;
    customContextMenu.classList.add("active");

    customContextMenu.style.left = leftPosition + "px";
    customContextMenu.style.top = topPosition + "px";

    customContextMenu.addEventListener("click", (e)=>{
        e.preventDefault();
        const targetId = e.target.id;
        if(targetId === "op1" || targetId === "op2" || targetId === "op3"){
            let selectedOption = e.target.textContent;
            let newDiv = document.createElement("div");
            newDiv.classList.add("new-div");
            newDiv.textContent = selectedOption;
            document.body.appendChild(newDiv);
            customContextMenu.classList.remove("active");
        }
    });

    document.addEventListener("click", (e)=>{
        if (e.target !== customContextMenu) {
            customContextMenu.classList.remove("active");
        }
    });
})