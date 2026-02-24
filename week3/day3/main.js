let api =  "https://699328f38f29113acd402f5b.mockapi.io/gamble/api/v1/gamble"
let box = document.querySelector(".box")
let form = document.querySelector(".form")
let addU = document.querySelector(".addU")
let d = document.querySelector(".d")
let aBtn = document.querySelector(".aBtn")
let x = document.querySelector(".x")
let editD = document.querySelector(".editD")
let formD = document.querySelector(".formD")
let eBtn = document.querySelector(".editBtn")
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
async function editUI(id) {
    try {
        await axios.put(`${api}/${idx}`, user)
        getUser()
    } catch (error) {
        console.error(error);
        
    }
}
function editUI2(e) {
    idx = e.id
    formD["profile"].value = e.profile
    formD["name"].value = e.name
    formD["job"].value = e.job
    formD["salary"].value = e.salary
    formD["status"].checked = e.status == "Active" ? true : false
    
}

function showUser(users) {
  box.innerHTML = ""
  users.forEach((e,i) => {
    let tr = document.createElement("tr")
    let tdId = document.createElement("td")
    let tdPic = document.createElement("td")
    let tdName = document.createElement("td")
    let tdJob = document.createElement("td")
    let tdSalary = document.createElement("td")
    let tdStatus = document.createElement("td")
    let btnAct = document.createElement("td")
    let btnD = document.createElement("button")
    let btnE = document.createElement("button")

    tdId.innerHTML = i+1
    tdName.innerHTML = e.name
    tdJob.innerHTML = e.job
    tdSalary.innerHTML = e.salary
    tdStatus.innerHTML = e.status
    btnD.innerHTML = "Delete"
    btnE.innerHTML = "Edit"

    let img = document.createElement("img")
    img.src = e.profile
    img.style.width = "50px"
    img.style.height = "50px"
    img.style.objectFit = "cover"
    img.style.borderRadius = "50%"
    tdPic.append(img)

    btnAct.append(btnD, btnE)
    tr.append(tdId, tdPic, tdName, tdJob, tdSalary, tdStatus, btnAct)
    box.append(tr)  
  })
}
getUser()

async