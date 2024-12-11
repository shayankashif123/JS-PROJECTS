document.addEventListener("DOMContentLoaded",()=> {
    getFromLocal();
});
let btn = document.querySelector("#btn");
let items = document.querySelector(".items");
let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    items.innerHTML = ""
    localStorage.removeItem("item");
})
btn.addEventListener("click", () => {
    let input = document.querySelector("#input").value;
    if (input) {
        add_items(input);
        saveToLocal();
        document.querySelector("#input").value = "";
    }
});

function add_items(input) {
    let new_items = document.createElement('div');
    new_items.textContent = input;
    new_items.classList.add('new-item');
    items.appendChild(new_items);
    let update = document.createElement('span');
    update.id = "update-logo";
    let updateImg = document.createElement('img');
    updateImg.id = "update";
    updateImg.src = "update.png";
    update.appendChild(updateImg);
    new_items.appendChild(update);
    let iconSpan = document.createElement('span');
    iconSpan.id = "icon";
    let iconImg = document.createElement("img");
    iconImg.id = "img";
    iconImg.src = "delete.png"
    iconSpan.appendChild(iconImg);
    new_items.appendChild(iconSpan);
    document.querySelector("#input").value = "";
    iconImg.addEventListener("click", () => {
        items.removeChild(new_items)
        saveToLocal();
    })

    updateImg.addEventListener("click", () => {
        document.querySelector("#input").value = new_items.textContent.trim();
        let submit = btn.addEventListener("click", () => {
            if (submit) {
                items.textContent = input.value;
                saveToLocal();
            }
        })
    })
}
function saveToLocal() {
    const arr=[];
    document.querySelectorAll(".new-item").forEach(items=> {
        arr.push(items.textContent.trim())
    })
    localStorage.setItem("item", JSON.stringify(arr));
}
function getFromLocal() {
    const itemsArray = JSON.parse(localStorage.getItem("item")) || [];
    itemsArray.forEach(items=> {
        add_items(items);
    })
}

