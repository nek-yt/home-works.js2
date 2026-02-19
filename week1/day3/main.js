let idx = null
let box = document.querySelector(".box")
let form = document.querySelector('.addForm')
let users = [
    {
        id:1,
        name:"John",
        job:'Coconut',
        status:'Active',
    },
    {
        id:2,
        name:"John",
        job:'Coconut',
        status:'Active',
    },
    {
        id:3,
        name:"John",
        job:'Coconut',
        status:'Active',
    },
    {
        id:4,
        name:"John",
        job:'Coconut',
        status:'Active',
    },
]

let btnAdd = document.createElement("button")
let inpN = document.createElement('input')
let inpJ = document.createElement('input')

function deleteUser(id) {
    users= users.filter(e => e.id != id)
    showUsers()
}
users = JSON.parse(localStorage.getItem("data")) || []

function addUser(name, job) {
    let newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name: name,
        job: job,
        status: true
    }
    users.push(newUser)
    showUsers()
}


function showUsers() {
    box.innerHTML = ''

    users.forEach((e, i) => {
        let tr = document.createElement('tr')

        let tdId = document.createElement('td')
        let tdName = document.createElement('td')
        let tdJob = document.createElement('td')
        let tdStatus = document.createElement('td')
        let tdActions = document.createElement('td')
        let btnDelete = document.createElement('button')
        let btnEdit = document.createElement('button')

        btnDelete.innerHTML = "Delete"
        btnEdit.innerHTML = "Edit"
        tdId.innerHTML = i + 1
        tdName.innerHTML = e.name
        tdJob.innerHTML = e.job
        tdStatus.innerHTML = e.status ? 'Active' : 'Inactive'

        btnDelete.onclick = () => deleteUser(e.id)
        btnEdit.onclick = () => addUser()

        tdActions.append(btnDelete, btnEdit)
        tr.append(tdId, tdName, tdJob, tdStatus, tdActions)

        box.append(tr)
    })
}
showUsers()