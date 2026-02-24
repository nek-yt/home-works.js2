let api = "https://699328f38f29113acd402f5b.mockapi.io/gamble/api/v1/gamble"
let box = document.querySelector(".box")
let form = document.querySelector(".form")
let aform = document.querySelector(".addForm")
let dialog = document.querySelector(".dialog")
let addDia = document.querySelector(".addDia")
let btnEA = document.querySelector(".btnEA")
let btnAdd2 = document.querySelector(".btnAdd")
let btnAdd = document.querySelector(".addUser")
let x = document.querySelector(".x")
let stat = document.querySelector("#stat")
let stata = document.querySelector("#stata")
let idx = null

async function getUser() {
    try {
        const response = await axios.get(api)
        const data = response.data
        showUser(data)
    } catch (error) {
        console.error(error)
    }
}
async function deleteUser(id) {
    try {
        await axios.delete(`${api}/${id}`)
        getUser()
    } catch (error) {
        console.error(error)
    }
}

async function editUser(user) {
    try {
        await axios.put(`${api}/${idx}`, user)
        getUser()
    } catch (error) {
        console.error(error)
    }
}

async function addUser(user) {
    try {
        await axios.post(api, user)
        getUser()
    } catch (error) {
        console.error(error)
    }
}
function editUI(e) {
    idx = e.id
     form["profile"].value = e.profile
     form["name"].value = e.name
     form["date"].value = e.date
     form["role"].value = e.role
     form["status"].checked = e.status
}
form.onsubmit = (e) => {
    e.preventDefault()
    let obj = {
        profile: form["profile"].value,
        name: form["name"].value,
        date: form["date"].value,
        role: form["role"].value,
        status: form["status"].checked
    }
    form.reset()
    editUser(obj)
    dialog.close()
}

btnEA.onclick = () => {
    dialog.show()
}
x.onclick = () => {
    dialog.close()
}
btnAdd.onclick = () => {
    addDia.show()
        aform.onsubmit = (e) => {
        e.preventDefault()
        let obj = {
            profile: aform["profilea"].value,
            name: aform["namea"].value,
            date: aform["datea"].value,
            role: aform["rolea"].value,
            status: aform["statusa"].checked
            status: aform["statusa"].checked
        }
    aform.reset()
    addUser(obj)
    addDia.close()
}
    btnAdd2.innerHTML = "Add User"
}

function showUser(user) {
    box.innerHTML = ""
    user.forEach((e,i) => {
        let tr = document.createElement("tr")
        let tdId = document.createElement("td")
        let tdPic = document.createElement("td")
        let tdName = document.createElement("td")
        let tdDate = document.createElement("td")
        let tdStatus = document.createElement("td") 
        let tdRole = document.createElement("td")
        let tdPic2 = document.createElement("td")
        let btnE = document.createElement("button")
        let btnD = document.createElement("button")
        let btnAct = document.createElement("td")
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = e.status

        btnE.innerText = "Edit"
        btnD.innerText = "Delete"

        btnE.onclick = () => {
            dialog.showModal()
            editUI(e)
            btnEA.innerHTML = "Edit User"
        }
        btnD.onclick = () => {deleteUser(e.id)}


        let img = document.createElement("img")
        img.src = e.profile
        img.style.width = "50px"
        img.style.height = "50px"
        img.style.objectFit = "cover"
        img.style.borderRadius = "50%"
        tdPic2.append(img)

        tdId.innerText = i+1
        tdPic.innerText = e.profile
        tdName.innerText = e.name
        tdDate.innerText = e.date
        tdRole.innerText = e.role
        tdStatus.innerText = e.status ? "Active" : "Inactive"
        tdStatus.innerText = checkbox.checked ? "Active" : "Inactive"

        checkbox.onchange = () => {
            e.status = checkbox.checked
            tdStatus.innerText = checkbox.checked ? "Active" : "Inactive"
        }

        tdStatus.append(checkbox)
        btnAct.append(btnE, btnD)
        tr.append(tdId, tdPic2, tdName, tdDate, tdRole, tdStatus, btnAct)
        box.append(tr)
    })
}
getUser()

export {getUser, showUser}