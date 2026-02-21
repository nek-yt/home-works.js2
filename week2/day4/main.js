let api = "https://699328f38f29113acd402f5b.mockapi.io/gamble/api/v1/gamble"
let box = document.querySelector(".box")
let form = document.querySelector(".form")
let dailog = document.querySelector(".dialog")
let x = document.querySelector(".x")
let ed = document.querySelector(".ed")
let addU = document.querySelector(".addU")
let idx = null

async function getUser() {
    try {
        let response = await axios.get(api)
        showUser(response.data)
    } catch (error) {
        console.error(error);
    }
}

async function deleteUI(id) {
    try {
        await axios.delete(`${api}/${id}`)
        getUser()
    } catch (error) {
        console.error(error);
    }
}

async function editUI(user) {
  try {
    await axios.put(`${api}/${idx}`, user)
    getUser()
  } catch (error) {
    console.error(error);
  }
}

async function addUI(user) {
  try {
    await axios.post(api, user)
    getUser()
  } catch (error) {
    console.error(error);
  }
}

function editUsers(e) {
    dailog.show()
  idx = e.id
  form["name"].value = e.name
  form["job"].value = e.job
}

form.onsubmit = (event) => {
    event.preventDefault()
    let obj = {
        name: form["name"].value,
        job: form["job"].value
    }
    form.reset()
    editUI(obj)
    dailog.close()
}

x.onclick = () => {
    dailog.close()
}

addU.onclick = () => {
    dailog.show()
    form.onsubmit = (event) => {
        event.preventDefault()
        let obj = {
            name: form["name"].value,
            job: form["job"].value
        }
        form.reset()
        addUI(obj)
        dailog.close()
        ed.innerHTML = "add"    
    }
}

function showUser(users) {
    box.innerHTML = ""
    users.forEach((e,i) => {
        let tr = document.createElement("tr")
        let tdId = document.createElement("td")
        let tdName = document.createElement("td")
        let tdJob = document.createElement("td")
        let tdAct = document.createElement("td")
        let btnD = document.createElement("button")
        let btnE = document.createElement("button")

        btnD.onclick = () => {deleteUI(e.id)}
        btnE.onclick = () => {editUsers(e)}

        tdId.innerHTML = i+1
        tdName.innerHTML = e.name
        tdJob.innerHTML = e.job
        btnD.innerHTML = "delete"
        btnE.innerHTML = "edit"

        tdAct.append(btnD,btnE)
        tr.append(tdId,tdName,tdJob,tdAct)
        box.append(tr)
    })
}
getUser()


    //     form.onsubmit = (e) => {
    //     e.preventDefault()
    //     let obj = {
    //         profile: form["profile"].value,
    //         name: form["name"].value,
    //         date: form["date"].value,
    //         role: form["role"].value,
    //         status: form["status"].value == "Active" ? true : false
    //     }
    //     form.reset()
    //     addUser(obj)
    //     dialog.close()
    // }