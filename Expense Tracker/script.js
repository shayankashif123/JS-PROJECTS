document.addEventListener("DOMContentLoaded",()=> {
    LoadFromStorage();
})
let btn = document.querySelector("#add");
let body = document.querySelector("#data");
let expense = 0;
function updateExpense() {
    document.querySelector(".expense").textContent = `Total expense : ${expense}`;
}
btn.addEventListener("click", () => {
    let name = document.querySelector("#name").value;
    let amount = parseFloat(document.querySelector("#amount").value);
    let category = document.querySelector("#category").value;
    let date = document.querySelector("#date").value;
    if (!isNaN(amount) && amount > 0) {
    add_row(name,amount,category,date);
    expense+=amount;
    updateExpense();
    SaveToLocalStorage();
    document.querySelector("#name").value = "";
    document.querySelector("#amount").value = "";
    document.querySelector("#category").value = "";
    document.querySelector("#date").value = "";
    }
})

    function add_row(name,amount,category,date) {
    let tr = document.createElement('tr');
    let values = [name,amount,category,date];
    values.forEach(value=> {
        let td = document.createElement('td');
        td.textContent=value;
        tr.appendChild(td);
    })
    let buttonTd = document.createElement('td');
    let btn1=document.createElement('button');
    btn1.className="btns"
    btn1.textContent="Edit";
    btn1.addEventListener("click",()=> {
        if(btn1.textContent==="Edit") {
            btn1.textContent="save";
            let cells = tr.querySelectorAll("td:not(:last-child)");
            cells.forEach((cell,index)=> {
                let input = document.createElement("input");
                if(index===1) {
                    input.type="number";
                }
                else if(index==3) {
                    input.type="date";
                }
                else {
                    input.type="text";
                }
                input.value = cell.textContent;
                cell.textContent = "";
                cell.appendChild(input);

            })
        } else {
            btn1.textContent="Edit";
            let cells = tr.querySelectorAll("td:not(:last-child)");
            cells.forEach(cell => {
                let input = cell.querySelector("input");
                cell.textContent = input.value; 
                if (input) {
                    cell.textContent = input.value;
                }
            });
            SaveToLocalStorage();
        }
    })
    let btn2=document.createElement('button');
    btn2.className="btns2"
    btn2.textContent="Delete";
    btn2.addEventListener("click",()=> {
        let rowAmount = parseFloat(tr.querySelectorAll("td")[1].textContent); 
        if (!isNaN(rowAmount)) {
            expense -= rowAmount; 
            updateExpense(); 
        }
        tr.remove();
        SaveToLocalStorage();
    })
    buttonTd.appendChild(btn1);
    buttonTd.appendChild(btn2);
    tr.appendChild(buttonTd);
    body.appendChild(tr);
}


function SaveToLocalStorage() {
    let rows=[];
    document.querySelectorAll("#data tr").forEach(tr=> {
        let row=[];
        tr.querySelectorAll("td:not(:last-child)").forEach(td=> {
            row.push(td.textContent);
        })
        rows.push(row);
    })
    localStorage.setItem("data",JSON.stringify(rows));
}
function LoadFromStorage() {
    let rows=JSON.parse(localStorage.getItem("data"))||[];
    rows.forEach(row=> {
        let amount = parseFloat(row[1]);
        expense+=amount
        add_row(row[0],row[1],row[2],row[3]);
    })
    updateExpense();
}