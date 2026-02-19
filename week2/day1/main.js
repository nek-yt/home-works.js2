let box = document.querySelector(".box")
let addForm = document.querySelector(".addForm")
let submit = document.querySelector(".submit")
let idx = null

let users=[
    {
        id:1,
        name:"Ahmad",
        status:false,

    },
    {
        id:2,
        name:"Umed",
        status:false,
    },
]
function deletUser(id) {
    users = users.filter((e) => e.id != id)
    showUsers()
}
addForm.onsubmit=(event)=>{
    event.preventDefault()
    let obj ={
        id:Date.now(),
        name:addForm["name"].value,
        status:addForm["status"].value=="true" ? true : false
    }
    if(idx){
        users = users.map((e)=>{
            if(e.id == idx){
                e = obj
            }
            return e
        })
        submit.innerHTML = "Add User"
        idx=null
    } else {
        users.push(obj)
    }
    addForm.reset()
    showUsers()
} 


function editUser(e) {
    idx=e.id
    submit.innerHTML="Edit User"
    addForm["name"].value=e.name
    addForm["status"].value=e.status?"true":"false"
    showUsers()
}

function showUsers() {
    box.innerHTML=""
    users.forEach((e)=>{
        let tr=document.createElement("tr")
        let tdName=document.createElement("td")
        let tdStatus=document.createElement("td")
        let tdAction=document.createElement("td")
        let btnDelete=document.createElement("button")
        let btnEdit=document.createElement("button")

        btnDelete.onclick=()=>{
            deletUser(e.id)
        }
        btnEdit.onclick=()=>{
            editUser(e)
        }
        btnEdit.innerHTML="edit"
        btnDelete.innerHTML="delete"
        tdName.innerHTML=e.name
        tdStatus.innerHTML=e.status?"Active":"Inactive"
        tdAction.append(btnDelete,btnEdit)
        tr.append(tdName,tdStatus,tdAction)
        box.append(tr)
    })
}
showUsers()