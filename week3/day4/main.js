let api = "http://localhost:3001/datats"
let box = document.querySelector('.box');
let form = document.querySelector('.form');
let aform = document.querySelector('.aform');
let dialog = document.querySelector('.dialog');
let Adialog = document.querySelector('.Adialog');
let btnEA = document.querySelector('.btnEA');
let addBtn = document.querySelector('.addBtn');
let x = document.querySelector('.x');
let idx = null

let inp = document.querySelector(".inp1")
let sort = document.querySelector(".sort")



async function getUser() {
    try {
        const response = await fetch(api)
        const data = await response.json()
        showUser(data)
    } catch (error) {
        console.error(error)
    }
}
async function deleteUser(id) {
    try {
        await fetch(`${api}/${id}`, {
            method: "DELETE"
        })
        getUser()
    } catch (error) {
        console.error(error)
    }
}

async function editUser(user) {
    try {
        await fetch(`${api}/${idx}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        getUser()
    } catch (error) {
        console.error(error)
    }
}

async function addUser(id) {
    try {
        await fetch(api, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(id)
        })
        getUser()
    } catch (error) {
        console.error(error)
    }
}
function editUI(e) {
    idx = e.id
     form["img"].value = e.img
     form["name"].value = e.name
     form["cat"].value = e.cat
     form["price"].value = e.price
     form["qty"].value = e.qty
     form["status"].value == "Active"
}
form.onsubmit = (e) => {
    e.preventDefault()
    let obj = {
        img: form["img"].value,
        name: form["name"].value,
        cat: form["cat"].value,
        price: form["price"].value,
        qty: form["qty"].value,
        status: form["status"].value
    }
    if (idx != null) {
        editUser(obj)
    } else {
        addUser(obj)
    }
    form.reset()
    dialog.close()
    idx = null
}

x.onclick = () => {
    dialog.close()
}

btnEA.onclick = () => {
    dialog.show()
    form.reset()
    idx = null
    addBtn.innerText = "Add User";
}

function showUser(user) {
    box.innerHTML = "";
    user.forEach((e) => {
        let tr = document.createElement("tr");
        let tdImg = document.createElement("td");
        let tdName = document.createElement("td");
        let tdCat = document.createElement("td");
        let tdPrice = document.createElement("td");
        let tdQty = document.createElement("td");
        let tdStat = document.createElement("td");
        let tdBtn = document.createElement("td");
        let img = document.createElement("img");  
        let btnD = document.createElement("button");
        let btnE = document.createElement("button");
        let tdCheck = document.createElement("td");
        let check = document.createElement("input");
        check.type = "checkbox";

        btnD.innerText = "Delete";
        btnE.innerText = "Edit";


        btnD.style.color = "black"; 
        btnD.style.backgroundColor = "red";
        btnD.style.marginRight = "5px";
        btnD.style.border = "none";
        btnD.style.padding = "5px 10px";
        btnD.style.borderRadius = "5px"

        btnE.style.color = "black";
        btnE.style.backgroundColor = "yellow";
        btnE.style.border = "none";
        btnE.style.padding = "5px 10px";
        btnE.style.borderRadius = "5px"

        img.src = e.img;
        tdImg.append(img);
        tdName.innerText = e.name;
        tdCat.innerText = e.cat;
        tdPrice.innerText = `$${e.price}`;
        tdQty.innerText = e.qty;
        tdStat.innerText = e.status ? "Active" : "Inactive"
        btnD.onclick = () => deleteUser(e.id);
        btnE.onclick = () => {
            dialog.show();
            editUI(e);
            addBtn.innerText = "Edit User";
        }
        
        tdCheck.append(check);
        tdBtn.append(btnD,btnE);
        tr.append(tdCheck, tdImg, tdName, tdCat, tdPrice, tdQty, tdStat, tdBtn);
        box.append(tr);
    })
}

getUser()